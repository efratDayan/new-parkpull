using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class rentedParkingDTO
    {
        public int rentedParkingCode { get; set; }
        public int offerCode { get; set; }
        public int requestCode { get; set; }
        public int dayOfWeekForOffer { get; set; }
        public int dayOfWeekForRequest { get; set; }
        public System.DateTime startDateForRequest { get; set; }
        public Nullable<System.DateTime> endDateForRequest { get; set; }
        public System.TimeSpan startHourForRequest { get; set; }
        public Nullable<System.TimeSpan> endHourForRequest { get; set; }
    }
}
