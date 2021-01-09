using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class parkingRentalRequestsConverter
    {
        public static parkingRentalRequest ConvertparkingRentalRequestsToDAL(parkingRentalRequestsDTO parkingRentalRequests)
        {
            return new parkingRentalRequest
            {
                requestCode = parkingRentalRequests.requestCode,
                carCode = parkingRentalRequests.carCode,
                startDateForRequest = parkingRentalRequests.startDateForRequest,
                endDateForRequest = parkingRentalRequests.endDateForRequest,
                startHourForRequest = parkingRentalRequests.startHourForRequest.TimeOfDay,
                endHourForRequest = parkingRentalRequests.endHourForRequest.Value.TimeOfDay,
                requestAdress = parkingRentalRequests.requestAdress,
                daysAweekForRequests=parkingRentalRequests.Days.Select(d=>
                new daysAweekForRequest { dayOfWeekForRequest=d}).ToList()
            };
        }

        public static parkingRentalRequestsDTO ConvertparkingRentalRequestsToDTO(parkingRentalRequest parkingRentalRequests)
        {
            return new parkingRentalRequestsDTO
            {
                requestCode = parkingRentalRequests.requestCode,
                carCode = parkingRentalRequests.carCode,
                startDateForRequest = parkingRentalRequests.startDateForRequest,
                endDateForRequest = parkingRentalRequests.endDateForRequest,
                startHourForRequest = DateTime.Today + parkingRentalRequests.startHourForRequest,
                endHourForRequest = DateTime.Today+ parkingRentalRequests.endHourForRequest,
                requestAdress = parkingRentalRequests.requestAdress,
                Days=parkingRentalRequests.daysAweekForRequests.Select(d=>d.dayOfWeekForRequest).ToList()
                
            };
        }
    }
}
