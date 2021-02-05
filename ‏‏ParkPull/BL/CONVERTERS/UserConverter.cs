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
                userCode = User.id,
                Name = User.username,
             
                Email = User.Email,
                Password = User.password,
              
            };
        }


        public static UserDTO ConvertUserToDTO(User User)
        {
            return new UserDTO
            {
                id = User.userCode,
                username = User.Name,
              
                Email = User.Email,
                password = User.Password,
              
            };
        }
    }
}
