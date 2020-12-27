import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/shared/services/car.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-car-settings',
  templateUrl: './car-settings.page.html',
  styleUrls: ['./car-settings.page.scss'],
})
export class CarSettingsPage implements OnInit {

  public carSettingsForm: FormGroup;

  constructor(private carService: CarService, private router:Router) { 
    this.carSettingsForm = new FormGroup({
      carNumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(6)]),
      carType: new FormControl('', [Validators.required]),
      Length: new FormControl('', [Validators.required, Validators.max(20000 ),Validators.min(269.5 )]),
      width: new FormControl('', [Validators.required, Validators.max(4000 ), Validators.min(0.20 )]),
      Weight:  new FormControl('', [Validators.required, Validators.max(40000  ), Validators.min(100  )]),
      height: new FormControl('', [Validators.required, Validators.max(189  ), Validators.min(1  )])
    });
    
  }

  ngOnInit() {
    
    
  }


  carSetting(form) {
    if(form.valid)
    this.carService.create(form.value)
      .subscribe((res) => {
        this.router.navigateByUrl('car-settings');
      });
  }
}
