import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalOptionsForRequest } from '../models/options-for-request.model';
import { RentalOption } from '../models/rental-option.model';
import { RentalRequest } from '../models/rentalRequest.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  addRequest(  request:RentalRequest) : Observable<RentalOptionsForRequest>{
    return this.http.post<RentalOptionsForRequest>(environment.url+'request/post', request);
  }

   setParking(requestId,parkingId)
   {
     
   }

}
