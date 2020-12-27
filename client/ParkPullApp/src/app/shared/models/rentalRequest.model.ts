import { Time } from '@angular/common';

export class RentalRequest
{
    requestCode:number
    carCode:number
    startDateForRequest:Date
    endDateForRequest :Date
    startHourForRequest :Date
    endHourForRequest:Date
    requestAdress :string

    days:number[]=[]
}