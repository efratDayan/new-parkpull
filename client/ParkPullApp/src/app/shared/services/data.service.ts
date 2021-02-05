import { Injectable } from '@angular/core';
import { RentalOptionsForRequest } from '../models/options-for-request.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userCode
price:number
result:RentalOptionsForRequest
  constructor() { }
}
