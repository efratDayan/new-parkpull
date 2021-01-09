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
        parkPullDBEntities DB = new parkPullDBEntities();
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
    }
}
