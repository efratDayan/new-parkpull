using BL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]

    public class UserController : ApiController
    {
        UserBL UserBL = new UserBL();
   


        [Route("AddUserToDB")]
        [HttpPost]
        public int AddUserToDB(UserDTO userDTO)
        {
            return UserBL.AddUserToDB(userDTO);
        }


        [Route("AddParkToDB")]
        [HttpPost]
        public int AddParkToDB(ParkingDTO parking)
        {
            return UserBL.AddParkToDB(parking);
        }
        [Route("FindUser")]
        [HttpGet]
        public bool FindUser(string name,string password)
        {
            return UserBL.FindUser(name, password);
        }

    }
}