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
               Name=user.Name,
               Tell=user.Tell,
               Email=user.Email,
               Password=user.Password,
               userAdress=user.userAdress
            };
            DB.Users.Add(newUser);
            DB.SaveChanges();
            return newUser.userCode;
        }

        public int AddParkToDB(ParkingDTO park)
        {
            Parking parking = new Parking()
            { widthPoint=park.widthPoint,
                lengthPoint=park.lengthPoint,
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
                startDateForOffer = new DateTime(),
                startHourForOffer=new TimeSpan()
            
            };
            DB.RentalOffersForParkings.Add(RentalOffersForParkingConverter.ConvertRentalOffersForParkingToDAL(rentalOffersForParking));
            return parking.userCode;
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

        public ParkingDTO GetParkDetails(int userCode)
        {
            var park = (from p in DB.Parkings
                       where p.userCode == userCode
                       select p).First();

            var Park = new ParkingDTO()
            {
               parkingCode = park.parkingCode,
               lengthPoint=(double)park.lengthPoint,
               parkHeight= (double)park.parkHeight,
               parkLength=(double)park.parkLength,
               parkWeight=(double)park.parkWeight,
               parkWidth=(double)park.parkWidth,
               price=(double)park.price,
               widthPoint=(double)park.widthPoint,
               
               



            };
            return Park;
        }

        public bool UpdatePark(ParkingDTO parking)
        {
            var park = (from p in DB.Parkings
                       where parking.parkingCode == p.parkingCode
                       select p).First();

            if (park != null)
            {
                park.parkingCode = parking.parkingCode;
               park.lengthPoint = parking.lengthPoint;
               park.parkHeight =parking.parkHeight;
               park.parkLength = parking.parkLength;
               park.parkWeight = parking.parkWeight;
               park.parkWidth =parking.parkWidth;
               park.price = parking.price;
               park.widthPoint = parking.widthPoint;

                return true;
            }
            else return false;
        }
    }
}
