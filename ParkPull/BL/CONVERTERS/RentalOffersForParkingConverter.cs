using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class RentalOffersForParkingConverter
    {
        public static RentalOffersForParking ConvertRentalOffersForParkingToDAL(RentalOffersForParkingDTO RentalOffersForParking)
        {
            return new RentalOffersForParking
            {
                offerCode = RentalOffersForParking.offerCode,
                parkingCode = RentalOffersForParking.parkingCode,
                startDateForOffer = RentalOffersForParking.startDateForOffer,
                endDateForOffer = RentalOffersForParking.endDateForOffer,
                startHourForOffer = RentalOffersForParking.startHourForOffer,
                endHourForOffer = RentalOffersForParking.endHourForOffer
            };
        }

        public static RentalOffersForParkingDTO ConvertRentalOffersForParkingToDTO(RentalOffersForParking RentalOffersForParking)
        {
            return new RentalOffersForParkingDTO
            {
                offerCode = RentalOffersForParking.offerCode,
                parkingCode = RentalOffersForParking.parkingCode,
                startDateForOffer = RentalOffersForParking.startDateForOffer,
                endDateForOffer = RentalOffersForParking.endDateForOffer,
                startHourForOffer = RentalOffersForParking.startHourForOffer,
                endHourForOffer = RentalOffersForParking.endHourForOffer
            };
        }
    }
}
