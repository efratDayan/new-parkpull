using BL.Converters;
using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class UserBL
    {
        parkPullDBEntities2 DB = new parkPullDBEntities2();
        public int AddUserToDB(UserDTO user)
        {
            User newUser = new User()
            {
               Name=user.username,
              
               Email=user.Email,
               Password=user.password,
               
            };
            DB.Users.Add(newUser);
            DB.SaveChanges();
            return newUser.userCode;
        }

        public int AddParkToDB(ParkingDTO park)
        {
            Parking parking = new Parking()
            { adress=park.adress,
                parkHeight=park.parkHeight,
                parkLength=park.parkLength,
                parkWeight=park.parkWeight,
                parkWidth=park.parkWidth,
                userCode=park.userCode,
                price=park.price
            };
            DB.Parkings.Add(parking);
            DB.SaveChanges();
            RentalOffersForParkingDTO rentalOffersForParking = new RentalOffersForParkingDTO()
            {
                parkingCode = parking.parkingCode,
                startDateForOffer = DateTime.Now,
                startHourForOffer= DateTime.Now.TimeOfDay,

            };
            DB.RentalOffersForParkings.Add(RentalOffersForParkingConverter.ConvertRentalOffersForParkingToDAL(rentalOffersForParking));
            DB.SaveChanges();
            return parking.userCode;
        }

     

        public ParkingDTO GetParkDetailsForRent(int parkCode)
        {
            var p = (from park in DB.Parkings
                     where park.parkingCode == parkCode
                     select park).First();
            return ParkingConverter.ConvertParkingToDTO(p);
        }

        public bool FindUser(string name, string password)
        {
           
            var users = (from u in DB.Users
                        select u).ToList();
            foreach(var u in users)
            {
                if (u.Name == name)
                {
                     if (u.Password == password)
                        return true;
                }
            }
           
          
       
                return false;
        }

        public int GetUserCode(string name)
        {
            var code = (from u in DB.Users
                        where u.Name == name
                        select u.userCode).First();

            return code;
        }

        public bool FindUserForRegister(string name)
        {

            var users = (from u in DB.Users
                         select u).ToList();
            foreach (var u in users)
            {
                if (u.Name == name)
                {
                   
                        return true;
                }
            }



            return false;
        }

        public List<ParkingDTO> GetParkDetails(int userCode)
        {
            List<ParkingDTO> Park = new List<ParkingDTO>();
            var park = (from p in DB.Parkings
                        where p.userCode == userCode
                        select p).ToList();

            foreach (var item in park )
            {
                Park.Add(ParkingConverter.ConvertParkingToDTO(item));
            }
            return Park;
           
       
        }

        public UserDTO LoadUserDetails(int userCode)
        {
           
            var user = (from u in DB.Users
                        where u.userCode == userCode
                        select u).First();
            return Converters.UserConverter.ConvertUserToDTO(user);
        }

        public bool UpdatePark(ParkingDTO parking)
        {
            var park = (from p in DB.Parkings
                       where parking.parkingCode == p.parkingCode
                       select p).First();

            if (park != null)
            {
                park.parkingCode = parking.parkingCode;
                park.adress = parking.adress;
               park.parkHeight =parking.parkHeight;
               park.parkLength = parking.parkLength;
               park.parkWeight = parking.parkWeight;
               park.parkWidth =parking.parkWidth;
               park.price = parking.price;

                DB.SaveChanges();
                return true;
            }
            else return false;
        }

        public bool UpdateUser(UserDTO user)
        {
            var User = (from u in DB.Users
                        where u.userCode == user.id
                        select u).First();

            if (User != null)
            {
                User.Name = user.username;
                User.Password = user.password;
                User.Email = user.Email;

                DB.SaveChanges();
                return true;
            }
            else return false;
        }

        public double? RentPark(RentalOption parking)
        {
            try {  var request = (from r in DB.parkingRentalRequests
                           where r.requestCode == parking.requestCode
                           select r).First();
            var offer = (from o in DB.RentalOffersForParkings
                         where o.offerCode == parking.offerCode
                         select o).First();
             
           
                var rent = new rentedParking()
            {
                offerCode = offer.offerCode,
                //dayOfWeekForOffer = 1,
                //dayOfWeekForRequest = 1,
                endDateForRequest =request.endDateForRequest,
               endHourForRequest=request.endHourForRequest,
               //rentedParkingCode=parking.parkingCode,
           UserCode=parking.userCode,
                    daysAweekForRequest =new daysAweekForRequest()
                    {
                        requestCode=request.requestCode,
                        dayOfWeekForRequest=1,
                        
                    },
                    daysAweekForOffer =new daysAweekForOffer()
                    {
                        offerCode=offer.offerCode,
                        dayOfWeekForOffer=1
                    },

               requestCode=request.requestCode,
               startDateForRequest=request.startDateForRequest,
               startHourForRequest=request.startHourForRequest,

            };

                var price = ((request.endHourForRequest.Value.TotalSeconds - request.startHourForRequest.TotalSeconds) * offer.Parking.price)/60;
                DB.rentedParkings.Add(rent);
                DB.SaveChanges();
                return price; }
            catch(Exception e)
            {
                throw e;
            }
           
        }
    }
}
