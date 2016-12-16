using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MonsterTraining.Models;
using System;
using System.Linq;

namespace MonsterTraining.Controllers
{
    public class HomeController : Controller
    {
        IOptions<StripeOptions> _stripeOptions;
        public HomeController(IOptions<StripeOptions> stripeOptions)
        {
            _stripeOptions = stripeOptions;
        }

        public IActionResult Index()
        {
            return View(new StripeModel { Key = _stripeOptions.Value.Key });
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
