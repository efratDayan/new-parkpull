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
    [RoutePrefix("api/car")]

    public class CarController : ApiController
    {
       
        CarBL carBL = new CarBL();
        [Route("AddCarToDB")]
        [HttpPost]
        public IHttpActionResult AddCarToDB(CarDTO carDTO)
        {
            return Ok(carBL.AddCarToDB(carDTO));
        }


    }
}