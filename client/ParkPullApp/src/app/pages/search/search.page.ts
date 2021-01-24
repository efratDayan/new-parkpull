import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { RentalRequest } from 'src/app/shared/models/rentalRequest.model';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  request:RentalRequest=new RentalRequest();
  constructor(private requestService:RequestService,
    private router:Router) { }

  ngOnInit() {
  }

  handlestartingPointChange(a:Address)
  {
    console.log(a)
  }

  search(){
    console.log(this.request)
    //let d=new Date(this.request.endHourForRequest)
    
    this.requestService.addRequest(this.request).subscribe(
      res=>
this.router.navigate(['result',JSON.stringify(res)])
    )
  }
}
