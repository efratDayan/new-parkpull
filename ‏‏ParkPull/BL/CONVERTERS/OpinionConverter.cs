using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class OpinionConverter
    {
        public static Opinion ConvertOpinionToDAL(OpinionDTO Opinion)
        {
            return new Opinion
            {
                opinionCode= Opinion.opinionCode,
                rentedParkingCode= Opinion.rentedParkingCode,
                rating= Opinion.rating,
                comment= Opinion.comment
            };
        }

        public static OpinionDTO ConvertOpinionToDTO(Opinion Opinion)
        {
            return new OpinionDTO
            {
                opinionCode = Opinion.opinionCode,
                rentedParkingCode = Opinion.rentedParkingCode,
                rating = Opinion.rating,
                comment = Opinion.comment
            };
        }
    }
}
