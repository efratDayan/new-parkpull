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
        public IHttpActionResult AddUserToDB(UserDTO userDTO)
        {
            return Ok(UserBL.AddUserToDB(userDTO));
        }

    
    }
}