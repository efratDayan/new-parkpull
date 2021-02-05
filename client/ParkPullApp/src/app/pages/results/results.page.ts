import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RentalOptionsForRequest } from 'src/app/shared/models/options-for-request.model';
import { RentalOption } from 'src/app/shared/models/rental-option.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit, AfterViewInit {
  results: RentalOption[] = new Array<RentalOption>()
  isShown = false
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    for (let index = 0; index < this.data.result.RentalOptions.length; index++) {

      this.results.push(this.data.result.RentalOptions[index])
    }


  }



  viewParking() {
    if (!this.isShown)
      this.isShown = true
    else
      this.isShown = false
  }
}
