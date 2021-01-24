import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkSettingsForEditPage } from './park-settings-for-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ParkSettingsForEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkSettingsForEditPageRoutingModule {}
