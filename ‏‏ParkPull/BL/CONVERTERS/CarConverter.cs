using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public class CarConverter
    {
        public static Car ConvertCarToDAL(CarDTO car)
        {
            return new Car
            {
                carCode=car.carCode,
                carHeight=car.carHeight,
                carLength=car.carLength,
                carNumber=car.carNumber,
                carWeight=car.carWeight,
                carWidth=car.carWidth,
                userCode=car.userCode
            };
        }

        public static CarDTO ConvertCarToDTO(Car car)
        {
            return new CarDTO
            {
                carCode = car.carCode,
                carHeight = (double)car.carHeight,
                carLength =(double)car.carLength,
                carNumber =car.carNumber,
                carWeight =(double)car.carWeight,
                carWidth = (double)car.carWidth,
                userCode = car.userCode
            };
        }
    }
}
