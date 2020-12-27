import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalOptionsForRequest } from 'src/app/shared/models/options-for-request.model';
import { RentalOption } from 'src/app/shared/models/rental-option.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  result:RentalOptionsForRequest=new RentalOptionsForRequest();

  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
this.route.params.subscribe(
  p=> this.result=JSON.parse(p.res)
)
  }

  interested(parkingCode:number)
  {
    
  }

}
