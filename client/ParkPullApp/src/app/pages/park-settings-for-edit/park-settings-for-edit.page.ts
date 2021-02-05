import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parking } from 'src/app/shared/models/parking.model';
import { DataService } from 'src/app/shared/services/data.service';
import { ParkingService } from 'src/app/shared/services/parking.service';

@Component({
  selector: 'app-park-settings-for-edit',
  templateUrl: './park-settings-for-edit.page.html',
  styleUrls: ['./park-settings-for-edit.page.scss'],
})
export class ParkSettingsForEditPage implements OnInit {
  park:Parking
  parks:Parking[]
  public parkSettingsForm: FormGroup;

  constructor(private parkService:ParkingService, private data: DataService, private router: Router) {
    this.parkSettingsForm = new FormGroup({
      Length: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      Weight: new FormControl(),
     adress:new FormControl(),
      Price:new FormControl()
    });
   }


  ngOnInit() {
    this.loadParkDetails()
  }
  checked(parkingCode) {
    this.parks.forEach(p => {
      if (p.parkingCode == parkingCode) {
        
        this.park = p
        // this.ngOnInit()
      }

    });

  }


  loadParkDetails(){
    this.parkService.getParkDetails(this.data.userCode).subscribe((res) => {
     this.parks=res ;
    });
  }

  Update(form){

 
    
      const park={
        parkingCode:this.park.parkingCode,
       adress:this.parkSettingsForm.controls.adress.value,
        parkWidth:this.parkSettingsForm.controls.width.value,
        parkHeight:this.parkSettingsForm.controls.height.value,
        parkLength:this.parkSettingsForm.controls.Length.value,
        parkWeight:this.parkSettingsForm.controls.Weight.value,
        userCode: this.data.userCode,
        price:this.parkSettingsForm.controls.Price.value
      } as Parking
       this.parkService.UpdatePark(park)
      .subscribe((res) => {
        this.router.navigateByUrl('/private-profile');
      });
    
   
  }
  }








