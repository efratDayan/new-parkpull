import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { FormControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  public registerForm: FormGroup;
  userNumber
  user:User
  isCorrectName
  changePassword=false
  constructor(private userService: UserService, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordAgain: new FormControl()
    });
    this.LoadUserDetails();
  }


  findUser(name: string) {
    this.userService.findUserForRegister(name).subscribe(res => {
      this.isCorrectName = res
    })
  }


  LoadUserDetails() {
    this.userService.LoadUserDetails(this.data.userCode).subscribe((res) => {
      this.user = res;
    });
  }

  Update(form) {



    const user = {
      id:this.data.userCode,
      Email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      username: this.registerForm.controls.name.value,
    } as User
    this.userService.update(user)
      .subscribe((res) => {
        this.router.navigateByUrl('/private-profile');
      });


  }
}










