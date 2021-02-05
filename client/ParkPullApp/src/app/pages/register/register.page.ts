import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { FormControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/models/user.model';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],

})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  userNumber
isCorrectName
  constructor(private userService: UserService, private router: Router,private data:DataService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordAgain: new FormControl()
    });
  }
  register(form) {
    if(form.valid){ 
       const user={
  Email:this.registerForm.controls.email.value,
  username:this.registerForm.controls.name.value,
  password:this.registerForm.controls.password.value
    } as User
    this.userService.create(user)
      .subscribe((res) => {
        this.data.userCode=res
        this.router.navigateByUrl('car-settings');
      });}
  
  }

  findUser(name:string){
this.userService.findUserForRegister(name).subscribe(res=>{
  this.isCorrectName=res
})
  }
}
