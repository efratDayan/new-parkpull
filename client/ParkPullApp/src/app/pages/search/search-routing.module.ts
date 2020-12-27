import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateProfilePage } from '../private-profile/private-profile.page';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
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
export class SearchPageRoutingModule {}
