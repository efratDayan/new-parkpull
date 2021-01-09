using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
     public class OpinionDTO
    {
        public int opinionCode { get; set; }
        public int rentedParkingCode { get; set; }
        public Nullable<int> rating { get; set; }
        public string comment { get; set; }
    }
}
