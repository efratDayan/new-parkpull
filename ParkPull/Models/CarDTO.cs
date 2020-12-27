using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
     public class CarDTO
    {
        public int carCode { get; set; }
        public string carNumber { get; set; }
        public Nullable<double> carLength { get; set; }
        public Nullable<double> carWidth { get; set; }
        public Nullable<double> carHeight { get; set; }
        public Nullable<double> carWeight { get; set; }
        public Nullable<int> userCode { get; set; }

    }
}
