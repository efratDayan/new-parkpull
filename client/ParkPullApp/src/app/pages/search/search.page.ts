import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Car } from 'src/app/shared/models/car.model';
import { RentalRequest } from 'src/app/shared/models/rentalRequest.model';
import { CarService } from 'src/app/shared/services/car.service';
import { DataService } from 'src/app/shared/services/data.service';
import { RequestService } from 'src/app/shared/services/request.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  carsList: Car[]
  request: RentalRequest = new RentalRequest();
  constructor(private requestService: RequestService,
    private router: Router, private data: DataService, private carservice: CarService) { }

  ngOnInit() {
    this.loadCarList()
  }

  handlestartingPointChange(a: Address) {
    console.log(a)
  }
  loadCarList() {
    this.carservice.getCarDetails(this.data.userCode).subscribe(res => {
      this.carsList = res;
    })
  }

  search() {
    console.log(this.request)
    //let d=new Date(this.request.endHourForRequest)

    this.requestService.addRequest(this.request).subscribe(res=>{
      this.data.result=res
      console.log(this.data.result)
      this.router.navigateByUrl('results')}
      // res =>{   
        
 
    )
  }
}
