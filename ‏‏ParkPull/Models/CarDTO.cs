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
        public double carLength { get; set; }
        public double carWidth { get; set; }
        public double carHeight { get; set; }
        public double carWeight { get; set; }
        public int userCode { get; set; }

    }
}
