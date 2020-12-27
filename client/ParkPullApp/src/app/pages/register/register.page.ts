import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { FormControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],

})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      passwordAgain: new FormControl()
    });
  }
  register(form) {
    if(form.valid)
    this.userService.create(form.value)
      .subscribe((res) => {
        this.router.navigateByUrl('car-settings');
      });
  }
}
