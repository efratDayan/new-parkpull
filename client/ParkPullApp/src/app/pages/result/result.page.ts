import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalOption } from 'src/app/shared/models/rental-option.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  result:RentalOption[]=[]

  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
this.route.params.subscribe(
  p=> this.result=JSON.parse(p.res)
)
  }

}
