import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarPage } from '../add-car/add-car.page';
import { AddParkPage } from '../add-park/add-park.page';
import { CarSettingsForEditPage } from '../car-settings-for-edit/car-settings-for-edit.page';
import { CarSettingsPage } from '../car-settings/car-settings.page';
import { HistoryPage } from '../history/history.page';
import { ParkSettingsForEditPage } from '../park-settings-for-edit/park-settings-for-edit.page';
import { RegisterPage } from '../register/register.page';
import { RegistrationSuccessPage } from '../registration-success/registration-success.page';
import { UpdateUserPage } from '../update-user/update-user.page';

import { PrivateProfilePage } from './private-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateProfilePage
  },
  {
    path: 'car-settings-for-edit'
    , component: CarSettingsForEditPage
  },
  {
    path: 'park-settings-for-edit',
    component: ParkSettingsForEditPage
  },
  {
    path: 'add-park',
    component: AddParkPage
  },
  {
    path: 'add-car',
    component: AddCarPage
  },
  {
    path: 'history',
    component: HistoryPage
  },
  {
    path: 'update-user',
    component: UpdateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateProfilePageRoutingModule {}
