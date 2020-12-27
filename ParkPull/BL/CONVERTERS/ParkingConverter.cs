﻿using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class ParkingConverter
    {
        public static Parking ConvertParkingToDAL(ParkingDTO Parking)
        {
            return new Parking
            {
                parkingCode = Parking.parkingCode,
                userCode = Parking.userCode,
                Name = Parking.Name,
                widthPoint = Parking.widthPoint,
                lengthPoint = Parking.lengthPoint,
                parkHeight = Parking.parkHeight,
                parkLength = Parking.parkLength,
                parkWeight = Parking.parkWeight,
                parkWidth = Parking.parkWidth,
                price = Parking.price
            };
        }

        public static ParkingDTO ConvertParkingToDTO(Parking Parking)
        {
            return new ParkingDTO
            {
                parkingCode = Parking.parkingCode,
                userCode = Parking.userCode,
                Name = Parking.Name,
                widthPoint = Parking.widthPoint,
                lengthPoint = Parking.lengthPoint,
                parkHeight = Parking.parkHeight,
                parkLength = Parking.parkLength,
                parkWeight = Parking.parkWeight,
                parkWidth = Parking.parkWidth,
                price = Parking.price
            };
        }
    }
}