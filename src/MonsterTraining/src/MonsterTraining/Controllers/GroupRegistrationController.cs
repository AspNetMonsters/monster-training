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
    public class GroupRegistrationController : Controller
    {
        private readonly StripeOptions _stripeOptions;

        public GroupRegistrationController(IOptions<StripeOptions> stripeOptions)
        {
            _stripeOptions = stripeOptions.Value;
        }

        public IActionResult Index(int minGroupSize = 5)
        {
            var groupSize = minGroupSize;
            if (groupSize < 3) groupSize = 3;

            ViewBag.MinGroupSize = groupSize;

            return View();
        }

        [HttpPost]
        public IActionResult Review(PreviewGroupRegistrationModel model)
        {
            // I ain't afraid of no ghosts
            var groupSize = model.GroupSize;
            if (groupSize < 3) groupSize = 3;            
            var total = (int)(1500 * groupSize);
            var gst = (int)(total * 0.05);

            var correctedAmountModel = new PreviewGroupRegistrationModel
            {
                EmailAddress = model.EmailAddress,
                ForgeryToken = model.ForgeryToken,
                FullName = model.FullName,
                Telephone = model.Telephone,
                GroupSize = groupSize,
                Gst = gst,
                Total = total,
                StripeAmount = (total + gst) * 100,
                Key = _stripeOptions.Key
            };
            
            
            return View(correctedAmountModel);
        }


        public IActionResult Complete(CompleteModel model)
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
            var groupSize = model.GroupSize;
            if (groupSize < 3) groupSize = 3;
            var total = (int)(1500 * groupSize);
            var gst = (int)(total * 0.05);

            myCharge.Amount = (total + gst) * 100;
            myCharge.Currency = "cad";
            myCharge.Metadata = new Dictionary<string, string>()
            {
                {"CustomerId", customer.Id },
                {"CustomerEmail", model.EmailAddress }
            };

            // set this if you want to
            myCharge.Description = "ASP.NET Monsters Training";
            myCharge.Source = new StripeSourceOptions { TokenId = model.StripeToken };

            // (not required) set this to false if you don't want to capture the charge yet - requires you call capture later
            myCharge.Capture = true;

            var chargeService = new StripeChargeService();
            StripeCharge stripeCharge = chargeService.Create(myCharge);

            return View();
        }


    }
}
