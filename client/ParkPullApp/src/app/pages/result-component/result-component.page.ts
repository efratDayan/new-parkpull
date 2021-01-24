import { Component, Input, OnInit } from '@angular/core';
import { RentalOption } from 'src/app/shared/models/rental-option.model';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.page.html',
  styleUrls: ['./result-component.page.scss'],
})
export class ResultComponentPage implements OnInit {

  constructor() { }
@Input() r :RentalOption
  ngOnInit() {
  }

}
