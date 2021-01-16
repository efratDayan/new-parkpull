import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { LoginWithNamePage } from './login-with-name.page';

const routes: Routes = [
  {
    path: '',
    component: LoginWithNamePage
  },{
    path:'home',
    component:HomePage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginWithNamePageRoutingModule {}
