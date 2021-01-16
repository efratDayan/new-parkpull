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
                userCode=park.userCode
            };
            DB.Parkings.Add(parking);
            DB.SaveChanges();
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
    }
}
