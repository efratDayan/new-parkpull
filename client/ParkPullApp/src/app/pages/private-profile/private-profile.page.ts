import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.page.html',
  styleUrls: ['./private-profile.page.scss'],
})
export class PrivateProfilePage implements OnInit {

    public profileDetailsForm: FormGroup;
  
    constructor(private carService: CarService, private router:Router) { 
      this.profileDetailsForm = new FormGroup({
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

  profileDetails(form) {
      if(form.valid)
      this.carService.create(form.value)
        .subscribe((res) => {
          this.router.navigateByUrl('private-profile');
    });
  }

}
