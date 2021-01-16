using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CarBL
    {
        parkPullDBEntities2 DB = new parkPullDBEntities2();
        public int AddCarToDB(CarDTO car)
        {
            Car newCar = new Car()
            {
               carHeight=car.carHeight,
               carLength=car.carLength,
               carNumber=car.carNumber,
               carWeight=car.carWeight,
               carWidth=car.carWidth,
               userCode=car.userCode
            };
            DB.Cars.Add(newCar);
            DB.SaveChanges();
            return newCar.carCode;
        }
    }
}
