import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSettingsPage } from '../car-settings/car-settings.page';
import { RegisterPage } from '../register/register.page';
import { RegistrationSuccessPage } from '../registration-success/registration-success.page';

import { PrivateProfilePage } from './private-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateProfilePage
  },
  {
    path: 'registration-success',
    component: RegistrationSuccessPage
  },

  {
    path: 'car-settings'
    , component: CarSettingsPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'park-settings',
    component: CarSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateProfilePageRoutingModule {}
