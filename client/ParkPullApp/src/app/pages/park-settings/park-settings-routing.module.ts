import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkSettingsPage } from './park-settings.page';
import { CarSettingsPage } from '../car-settings/car-settings.page';
import { RegistrationSuccessPage } from '../registration-success/registration-success.page';
import { RegisterPage } from '../register/register.page';
import { PrivateProfilePage } from '../private-profile/private-profile.page';




const routes: Routes = [
  {
    path: '',
    component: ParkSettingsPage
  },
  {
    path: 'car-settings'
    , component: CarSettingsPage
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessPage
  },
  {
    path:'register',
    component: RegisterPage
  },
  {
    path:'park-settings',
    component:ParkSettingsPage
  },
  {
    path: 'private-profile',
    component: PrivateProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkSettingsPageRoutingModule { }
