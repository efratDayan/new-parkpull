import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateProfilePage } from '../private-profile/private-profile.page';

import { CarSettingsForEditPage } from './car-settings-for-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CarSettingsForEditPage
  },
  {
    path:'private-profile',
    component:PrivateProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarSettingsForEditPageRoutingModule {}
