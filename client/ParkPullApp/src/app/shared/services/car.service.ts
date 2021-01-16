import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarSettingsPage } from 'src/app/pages/car-settings/car-settings.page';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  addCar(car: Car) : Observable<boolean>{
    return this.http.post<boolean>(environment.url+'car', car);
  }

  getAllCars():Observable<number> {
    return this.http.get<number>(environment.url+'car')
   }

   create(car: Car) {
    return this.http.post(environment.url+'car/AddCarToDB', car);
  }
}

