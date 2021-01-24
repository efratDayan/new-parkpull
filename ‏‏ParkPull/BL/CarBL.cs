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

        public CarDTO GetCarDetails(int userCode)
        {
            var car = (from c in DB.Cars
                       where c.userCode == userCode
                       select c).First();
            var Car = new CarDTO()
            {
                carCode=car.carCode,
                carWidth=(double)car.carWidth,
                carHeight=(double)car.carHeight,
                carLength= (double)car.carLength,
                carNumber=car.carNumber,
                carWeight=(double)car.carWeight


            };
            return Car;
        }

       public bool UpdateCar(CarDTO carDTO)
        {
            var car = (from c in DB.Cars
                       where carDTO.carCode == c.carCode
                       select c).First();

            if (car != null)
            {
                car.carHeight = carDTO.carHeight;
                car.carLength = carDTO.carLength;
                car.carNumber = carDTO.carNumber;
                car.carWeight = carDTO.carWeight;
                car.carWidth = carDTO.carWidth;
                
                return true;
            }
            else return false;
        }
    }
}
