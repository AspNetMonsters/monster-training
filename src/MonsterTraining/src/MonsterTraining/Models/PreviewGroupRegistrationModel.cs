using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonsterTraining.Models
{
    public class PreviewGroupRegistrationModel
    {
        public string Key { get; set; }
        public string ForgeryToken { get; set; }
        public int Total { get; set; }
        public int Gst { get; set; }
        public int GroupSize { get; set; }
        public string FullName { get; set; }
        public string EmailAddress { get; set; }
        public string Telephone { get; set; }
        public int StripeAmount { get; set; }
    }
}
