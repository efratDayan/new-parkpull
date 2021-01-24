import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/shared/services/car.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ValidatorFn } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { RegisterPage } from '../register/register.page';
import { DataService } from 'src/app/shared/services/data.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {


  public carSettingsForm: FormGroup;

  constructor(private carService: CarService, private router:Router,private data:DataService) { 
    this.carSettingsForm = new FormGroup({
      carNumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(6)]),
      carType: new FormControl('', [Validators.required]),
      Length: new FormControl('', [Validators.required, Validators.max(20000 ),Validators.min(269.5 )]),
      Width: new FormControl('', [Validators.required, Validators.max(4000 ), Validators.min(0.20 )]),
      Weight:new FormControl('', [Validators.required, Validators.max(40000  ), Validators.min(100  )]),
      Height: new FormControl('', [Validators.required, Validators.max(189  ), Validators.min(1  )])
    });
    
  }

  ngOnInit() {
    
    
  }


  carSetting(form) {
    if(form.valid){
      const car={
        
        carNumber: this.carSettingsForm.controls.carNumber.value,
        carLength: this.carSettingsForm.controls.Length.value,
        carWidth: this.carSettingsForm.controls.Width.value,
        carHeight: this.carSettingsForm.controls.Height.value,
        carWeight: this.carSettingsForm.controls.Weight.value,
        userCode: this.data.userCode

      }as Car
       this.carService.create(car)
      .subscribe((res) => {
        this.router.navigateByUrl('/private-profile');
      });
    }
   
  }
}






