using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class UserConverter
    {
        public static User ConvertUserToDAL(UserDTO User)
        {
            return new User
            {
                userCode = User.userCode,
                Name = User.Name,
                Tell = User.Tell,
                Email = User.Email,
                Password = User.Password,
                userAdress = User.userAdress
            };
        }


        public static UserDTO ConvertUserToDTO(User User)
        {
            return new UserDTO
            {
                userCode = User.userCode,
                Name = User.Name,
                Tell = User.Tell,
                Email = User.Email,
                Password = User.Password,
                userAdress = User.userAdress
            };
        }
    }
}
