import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultComponentPage } from './result-component.page';

const routes: Routes = [
  {
    path: '',
    component: ResultComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultComponentPageRoutingModule {}
