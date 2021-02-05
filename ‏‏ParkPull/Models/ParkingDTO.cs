using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
   public class ParkingDTO
    {
        public int parkingCode { get; set; }
        public int userCode { get; set; }
        public string Name { get; set; }
        public string adress { get; set; }
        public double parkWidth { get; set; }
        public double parkLength { get; set; }
        public double parkHeight { get; set; }
        public double parkWeight { get; set; }
        public double price { get; set; }

    }
}
