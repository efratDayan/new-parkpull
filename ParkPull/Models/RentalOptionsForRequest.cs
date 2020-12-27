using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
  public  class RentalOptionsForRequest
    {
        public int RequestId { get; set; }
        public List<RentalOption> RentalOptions { get; set; }
    }
}
