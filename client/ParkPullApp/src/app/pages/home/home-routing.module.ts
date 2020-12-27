import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateProfilePage } from '../private-profile/private-profile.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
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
export class HomePageRoutingModule {}
