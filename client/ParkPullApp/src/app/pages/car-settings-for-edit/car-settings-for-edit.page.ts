import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/models/car.model';
import { CarService } from 'src/app/shared/services/car.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-car-settings-for-edit',
  templateUrl: './car-settings-for-edit.page.html',
  styleUrls: ['./car-settings-for-edit.page.scss'],
})
export class CarSettingsForEditPage implements OnInit {
public carSettingsForm: FormGroup;
car
  constructor(private carService: CarService, private router:Router,private data:DataService) { 
    this.carSettingsForm = new FormGroup({
      carNumber: new FormControl('',),
      carType: new FormControl('', ),
      Length: new FormControl('',),
      Width: new FormControl('', ),
      Weight:new FormControl('',   ),
      Height: new FormControl()
    });
    
  }

  ngOnInit() {
    this.loadCarDetails();
  }

  loadCarDetails(){
    this.carService.getCarDetails(this.data.userCode).subscribe((res) => {
     this.car=res ;
    });
  }

  update(form) {
   
      const car={
        carCode:this.car.carCode,
        carNumber: this.carSettingsForm.controls.carNumber.value,
        carLength: this.carSettingsForm.controls.Length.value,
        carWidth: this.carSettingsForm.controls.Width.value,
        carHeight: this.carSettingsForm.controls.Height.value,
        carWeight: this.carSettingsForm.controls.Weight.value,
        userCode: this.data.userCode

      }as Car
       this.carService.updateCar(car)
      .subscribe((res) => {
        if(!res)
        alert('עדכון הפרטים נכשל')
        else
        this.router.navigateByUrl('private-profile');
      });
  
   
  }
}




  

 




