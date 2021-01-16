import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parking } from '../models/parking.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { }

  create(park: Parking) {
    return this.http.post(environment.url+'User/AddParkToDB', park);
  }
}
