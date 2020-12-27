using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
   public class parkingRentalRequestsDTO
    {
        public int requestCode { get; set; }
        public int carCode { get; set; }
        public System.DateTime startDateForRequest { get; set; }
        public Nullable<System.DateTime> endDateForRequest { get; set; }
        public System.DateTime startHourForRequest { get; set; }
        public Nullable<System.DateTime> endHourForRequest { get; set; }
        public string requestAdress { get; set; }
       public List<int> Days { get; set; }
    }
}
