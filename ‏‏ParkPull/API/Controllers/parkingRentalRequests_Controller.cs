using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Models;
namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/request")]

    public class parkingRentalRequestsController : ApiController
    {
        [Route("post"),HttpPost]
      public IHttpActionResult Post(Models.parkingRentalRequestsDTO request)
        {
            return Ok(new BL.RequestBL().AddRequest(request));
        }
    }
}