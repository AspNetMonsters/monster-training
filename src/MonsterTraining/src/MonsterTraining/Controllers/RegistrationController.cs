using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe;

namespace MonsterTraining.Controllers
{
    public class RegistrationController : Controller
    {
        IOptions<StripeOptions> _stripeOptions;
        public RegistrationController(IOptions<StripeOptions> stripeOptions)
        {
            _stripeOptions = stripeOptions;
        }

        public IActionResult Complete(string stripeToken)
        {
            var buffer = new byte[Request.ContentLength.Value];
            var body = Request.Body.Read(buffer, 0, (int)Request.ContentLength.Value);
            StripeConfiguration.SetApiKey(_stripeOptions.Value.SecretKey);

            var myCharge = new StripeChargeCreateOptions();

            // always set these properties
            myCharge.Amount = 199900;
            myCharge.Currency = "cad";

            // set this if you want to
            myCharge.Description = "ASP.NET Monsters Training";
            myCharge.Source = new StripeSourceOptions { TokenId = stripeToken };            
            
            // (not required) set this to false if you don't want to capture the charge yet - requires you call capture later
            myCharge.Capture = true;

            var chargeService = new StripeChargeService();
            StripeCharge stripeCharge = chargeService.Create(myCharge);

            return View();
        }

        public IActionResult Preview()
        {
            return View("Complete");
        }
    }
}
