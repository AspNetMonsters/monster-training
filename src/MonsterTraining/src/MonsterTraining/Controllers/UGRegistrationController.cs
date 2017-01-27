using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MonsterTraining.Models;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonsterTraining.Controllers
{
    public class UGRegistrationController : Controller
    {
        private readonly StripeOptions _stripeOptions;
        private readonly UserGroupOptions _ugOptions;

        public UGRegistrationController(IOptions<StripeOptions> stripeOptions, UserGroupOptions ugOptions)
        {
            _stripeOptions = stripeOptions.Value;
            _ugOptions = ugOptions;
        }

        public IActionResult Index(string groupCode)
        {
            if (string.IsNullOrEmpty(groupCode))
                return RedirectToAction("Index", "Home");

            if (!_ugOptions.UserGroups.Any(u => u.GroupCode == groupCode))
                return RedirectToAction("Index", "Home");

            ViewBag.GroupCode = groupCode;
            ViewBag.StripeKey = _stripeOptions.Key;

            var pageModel = new UserGroupModel
            {
                GroupCode = groupCode,
                GroupName = _ugOptions.UserGroups.First(u => u.GroupCode == groupCode).GroupName,
                StripeKey = _stripeOptions.Key
            };

            return View(pageModel);
        }

        public IActionResult Complete(UGCompleteModel model)
        {

            StripeConfiguration.SetApiKey(_stripeOptions.SecretKey);

            var myCharge = new StripeChargeCreateOptions();

            // find the customer with stripe
            var customerService = new StripeCustomerService();
            var customer = customerService.List().FirstOrDefault(c => c.Email == model.EmailAddress);

            if (customer == null)
            {
                var newCustomer = new StripeCustomerCreateOptions
                {
                    Email = model.EmailAddress,
                    Description = model.FullName,
                    Metadata = new Dictionary<string, string>() {
                        { "Telephone", model.Telephone }
                    }
                };
                customer = customerService.Create(newCustomer);
            }

            // always set these properties
            myCharge.Amount = 178500;
            myCharge.Currency = "cad";
            myCharge.Metadata = new Dictionary<string, string>()
            {
                {"CustomerId", customer.Id },
                {"CustomerEmail", model.EmailAddress },
                {"UserGroup", model.GroupName }
            };

            // set this if you want to
            myCharge.Description = "ASP.NET Monsters Training [UG]";
            myCharge.Source = new StripeSourceOptions { TokenId = model.StripeToken };

            // (not required) set this to false if you don't want to capture the charge yet - requires you call capture later
            myCharge.Capture = true;

            var chargeService = new StripeChargeService();
            StripeCharge stripeCharge = chargeService.Create(myCharge);

            return View();
        }

    }
}
