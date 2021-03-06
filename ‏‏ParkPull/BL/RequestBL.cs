﻿using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace BL
{
    public class RequestBL
    {
        public RentalOptionsForRequest AddRequest(Models.parkingRentalRequestsDTO request)
        {
            using (parkPullDBEntities2 db = new parkPullDBEntities2())
            {
                var dalRequest = Converters.parkingRentalRequestsConverter.ConvertparkingRentalRequestsToDAL(request);
                db.parkingRentalRequests.Add(dalRequest);
                db.SaveChanges();

                RentalOptionsForRequest options = new RentalOptionsForRequest();
                options.RequestId = dalRequest.requestCode;
                options.RentalOptions = GetOptionalOffers(db.parkingRentalRequests.Include(c=>c.Car).ToList().Last());
                return options;
            }
        }

        private List<Models.RentalOption> GetOptionalOffers(DAL.parkingRentalRequest request)
        {
            using (parkPullDBEntities2 db = new parkPullDBEntities2())
            {
                List<Models.RentalOption> goodOffers = new List<Models.RentalOption>();
                foreach (var offer in db.RentalOffersForParkings)
                {
                    if (offer.startDateForOffer <= request.startDateForRequest &&
                        //offer.endDateForOffer >= request.endDateForRequest &&
                        //offer.startHourForOffer <= request.startHourForRequest &&
                        //offer.endHourForOffer >= request.endHourForRequest &&
                        fitToPark(request.Car, offer.Parking) 
                        //fitToDay(offer.daysAweekForOffers.ToList(), request.daysAweekForRequests.ToList())
                        )
                    {
                        bool isOptional = true;
                      var catchedDays =  offer.daysAweekForOffers.Where(d => DayContains(d.dayOfWeekForOffer, request.daysAweekForRequests.ToList())).SelectMany(d=>d.rentedParkings);
                        if(catchedDays!=null)
                        foreach (var catchedDay in catchedDays)
                        {
                            if (catchedDay.startDateForRequest > request.endDateForRequest)
                                continue;
                            if (catchedDay.endDateForRequest < request.startDateForRequest)
                                continue;
                            if (catchedDay.startHourForRequest > request.endHourForRequest)
                                continue;
                            if (catchedDay.endHourForRequest < request.startHourForRequest)
                                continue;

                            isOptional = false;
                            break;
                        }

                        if (isOptional)
                        {
                            Models.RentalOption option = new RentalOption();
                            option.offerCode = offer.offerCode;
                            option.requestCode = request.requestCode;
                            option.price = offer.Parking.price;
                            option.Location = offer.Parking.adress;
                            option.parkingCode = offer.parkingCode;
                            option.userCode = offer.Parking.userCode;
                            //option.Location = GooglePlaces.ReverseGeoCoder(offer.Parking.lengthPoint.Value, offer.Parking.widthPoint.Value);
                            option.WalkingMinutes = GooglePlaces.GetWalkingDuration(request.requestAdress,offer.Parking.adress);
                            goodOffers.Add(option);
                        }
                    }

                }
                return goodOffers;

            }

        }

        private bool fitToPark(Car car, Parking parking)
                
{
            return (parking.parkHeight >= car.carHeight &&
                parking.parkWidth >= car.carWidth &&
                parking.parkWeight >= car.carWeight &&
                parking.parkLength >= car.carLength);
        }

        private bool fitToDay(List<daysAweekForOffer> offerDays, List<daysAweekForRequest> requestDays)
        {
            if (offerDays == null && requestDays == null)
                return true;

            return requestDays.All(r => offerDays.Any(o => o.dayOfWeekForOffer == r.dayOfWeekForRequest));


        }

        private bool DayContains(int offerDay, List<daysAweekForRequest> requestDays)
        {
          return requestDays.Any(d => d.dayOfWeekForRequest == offerDay) ;
        }
    }
}
