﻿using BL;
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

        [Route("FindUserForRegister")]
        [HttpGet]
        public bool FindUserForRegister(string name)
        {
            return UserBL.FindUserForRegister(name);
        }


        [Route("LoadUserDetails")]
        [HttpGet]
        public UserDTO LoadUserDetails(int userCode)
        {
            return UserBL.LoadUserDetails(userCode);
        }
        [Route("GetParkDetails")]
        [HttpGet]
        public List<ParkingDTO> GetParkDetails(int userCode)
        {
            return UserBL.GetParkDetails(userCode);
        }
        [Route("UpdatePark")]
        [HttpPost]
        public bool UpdatePark(ParkingDTO parking)
        {
            return UserBL.UpdatePark(parking);
        }

        [Route("UpdateUser")]
        [HttpPost]
        public bool UpdateUser(UserDTO user)
        {
            return UserBL.UpdateUser(user);
        }
        [Route("GetParkDetailsForRent")]
        [HttpGet]
        public ParkingDTO GetParkDetailsForRent(int parkCode)
        {
            return UserBL.GetParkDetailsForRent(parkCode);
        }

        [Route("RentPark")]
        [HttpPost]
        public double? RentPark(RentalOption parking)
        {
            return UserBL.RentPark(parking);
        }

       public int GetUserCode(string name)
        {
            return UserBL.GetUserCode(name);
        }
    }
}