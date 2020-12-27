using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public  class RentalOffersForParkingDTO
    {
        public int offerCode { get; set; }
        public int parkingCode { get; set; }
        public System.DateTime startDateForOffer { get; set; }
        public Nullable<System.DateTime> endDateForOffer { get; set; }
        public System.TimeSpan startHourForOffer { get; set; }
        public Nullable<System.TimeSpan> endHourForOffer { get; set; }
    }
}
