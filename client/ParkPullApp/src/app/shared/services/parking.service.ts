import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parking } from '../models/parking.model';
import { RentalOption } from '../models/rental-option.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {


  constructor(private http: HttpClient) { }

  create(park: Parking) {
    return this.http.post(environment.url + 'User/AddParkToDB', park);
  }

  getParkDetails(userCode) {
    return this.http.get<Parking[]>(environment.url + 'User/GetParkDetails?userCode=' + userCode)
  }

  UpdatePark(park: Parking) {
    return this.http.post(environment.url + 'User/UpdatePark', park);
  }
  getParkDetailsForRent(parkCode:number) {
    return this.http.get<Parking>(environment.url + 'User/GetParkDetailsForRent?parkCode='+ parkCode )
  }

  savePark(park: RentalOption) {
    return this.http.post<number>(environment.url+'User/RentPark',park)
  }

}
