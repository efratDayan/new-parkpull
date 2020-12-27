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
        public Nullable<double> widthPoint { get; set; }
        public Nullable<double> lengthPoint { get; set; }
        public Nullable<double> parkWidth { get; set; }
        public Nullable<double> parkLength { get; set; }
        public Nullable<double> parkHeight { get; set; }
        public Nullable<double> parkWeight { get; set; }
        public Nullable<double> price { get; set; }

    }
}
