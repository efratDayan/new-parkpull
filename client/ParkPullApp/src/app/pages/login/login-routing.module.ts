import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginWithNamePage } from '../login-with-name/login-with-name.page';
import { RegisterPage } from '../register/register.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },{
    path: 'login-with-name',
    component:LoginWithNamePage
  },
  {
    path:'register'
    ,component:RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
