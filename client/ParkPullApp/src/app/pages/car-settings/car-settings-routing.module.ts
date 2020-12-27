import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarSettingsPage } from './car-settings.page';
import { ParkSettingsPage } from '../park-settings/park-settings.page';

import { RegistrationSuccessPage } from '../registration-success/registration-success.page';
import { RegisterPage } from '../register/register.page';
import { PrivateProfilePage } from '../private-profile/private-profile.page';


const routes: Routes = [
  {
    path: '',
    component: CarSettingsPage
  },
  {
    path: 'park-settings',
    component: ParkSettingsPage
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessPage
  },
  {
    path: 'car-settings',
    component: CarSettingsPage
  },
  {
    path: 'register',
    component:RegisterPage
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
export class CarSettingsPageRoutingModule { }
