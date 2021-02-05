import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parking } from 'src/app/shared/models/parking.model';
import { RentalOption } from 'src/app/shared/models/rental-option.model';
import { DataService } from 'src/app/shared/services/data.service';
import { ParkingService } from 'src/app/shared/services/parking.service';

@Component({
  selector: 'app-result-inner-component',
  templateUrl: './result-inner-component.page.html',
  styleUrls: ['./result-inner-component.page.scss'],
})
export class ResultInnerComponentPage implements OnInit, AfterViewInit {

  constructor(private parkService: ParkingService, private router: Router, private data: DataService) { }
  @Input() park: RentalOption


  parking: Parking

  ngAfterViewInit() {
    this.loadParkDetails();
  }
  ngOnInit() {
  }
  SaveMe() {
    this.parkService.savePark(this.park).subscribe((res) => {
      this.data.price = res
      this.router.navigateByUrl('pay-pal')
    })
  }


  loadParkDetails() {
    this.parkService.getParkDetailsForRent(this.park.parkingCode).subscribe((res) => {
      this.parking = res;
    });
  }
}
