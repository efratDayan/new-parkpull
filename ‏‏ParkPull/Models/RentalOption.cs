using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class RentalOption
    {
        public int offerCode { get; set; }
        public int requestCode { get; set; }
        public int parkingCode { get; set; }
        public int userCode { get; set; }
        public Nullable<double> price { get; set; }
        public string Location { get; set; }
        public int WalkingMinutes { get; set; }

    }
}
