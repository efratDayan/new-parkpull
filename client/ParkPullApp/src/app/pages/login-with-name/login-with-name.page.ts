import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-with-name',
  templateUrl: './login-with-name.page.html',
  styleUrls: ['./login-with-name.page.scss'],
})
export class LoginWithNamePage implements OnInit {
LoginForm:FormGroup;
correctPassword;
  constructor(private userService:UserService,private data: DataService) { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
     
    });
  }

  login(){
    this.userService.login(this.LoginForm.controls.name.value).subscribe(res=>{
      this.data.userCode=res
    })
  }

  findUser(password:string){
    this.userService.findUser(this.LoginForm.controls.name.value,password) .subscribe((res) => {
 this.correctPassword=res ;
    });
  }


}
