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
        // GET api/<controller>
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}


        [Route("AddUserToDB")]
        [HttpPost]
        public IHttpActionResult AddUserToDB(UserDTO userDTO)
        {
            return Ok(UserBL.AddUserToDB(userDTO));
        }

        // GET api/<controller>/5
        [HttpGet]
        [Route("getuser")]
        public string GetUser([FromBody] int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] UserDTO user)
        {

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}