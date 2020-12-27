using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class rentedParkingConverter
    {
        public static rentedParking ConvertrentedParkingToDAL(rentedParkingDTO rentedParking)
        {
            return new rentedParking
            {
                rentedParkingCode = rentedParking.rentedParkingCode,
                offerCode = rentedParking.offerCode,
                requestCode = rentedParking.requestCode,
                dayOfWeekForOffer = rentedParking.dayOfWeekForOffer,
                dayOfWeekForRequest = rentedParking.dayOfWeekForRequest,
                startDateForRequest = rentedParking.startDateForRequest,
                endDateForRequest = rentedParking.endDateForRequest,
                startHourForRequest = rentedParking.startHourForRequest,
                endHourForRequest = rentedParking.endHourForRequest
            };
        }

        public static rentedParkingDTO ConvertrentedParkingToDTO(rentedParking rentedParking)
        {
            return new rentedParkingDTO
            {
                rentedParkingCode = rentedParking.rentedParkingCode,
                offerCode = rentedParking.offerCode,
                requestCode = rentedParking.requestCode,
                dayOfWeekForOffer = rentedParking.dayOfWeekForOffer,
                dayOfWeekForRequest = rentedParking.dayOfWeekForRequest,
                startDateForRequest = rentedParking.startDateForRequest,
                endDateForRequest = rentedParking.endDateForRequest,
                startHourForRequest = rentedParking.startHourForRequest,
                endHourForRequest = rentedParking.endHourForRequest
            };
        }
    }
}
