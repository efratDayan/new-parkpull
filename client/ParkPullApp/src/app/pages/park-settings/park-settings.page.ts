import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parking } from 'src/app/shared/models/parking.model';
import { DataService } from 'src/app/shared/services/data.service';
import { ParkingService } from 'src/app/shared/services/parking.service';

@Component({
  selector: 'app-park-settings',
  templateUrl: './park-settings.page.html',
  styleUrls: ['./park-settings.page.scss'],
})
export class ParkSettingsPage implements OnInit {
  public parkSettingsForm: FormGroup;

  constructor(private parkService:ParkingService, private data: DataService, private router: Router) {
    this.parkSettingsForm = new FormGroup({
      Length: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      Weight: new FormControl(),
      LengthPoint:new FormControl(),
      widthPoint: new FormControl(),
      Price:new FormControl()
    });
   }

  ngOnInit() {
  }


  parkSettings(form){

 
    if(form.valid){
      const park={
        lengthPoint:this.parkSettingsForm.controls.LengthPoint.value,
        widthPoint:this.parkSettingsForm.controls.widthPoint.value,
        parkWidth:this.parkSettingsForm.controls.width.value,
        parkHeight:this.parkSettingsForm.controls.height.value,
        parkLength:this.parkSettingsForm.controls.Length.value,
        parkWeight:this.parkSettingsForm.controls.Weight.value,
        userCode: this.data.userCode,
        price:this.parkSettingsForm.controls.Price.value
      } as Parking
       this.parkService.create(park)
      .subscribe((res) => {
        this.router.navigateByUrl('home');
      });
    }
   
  }
  }


