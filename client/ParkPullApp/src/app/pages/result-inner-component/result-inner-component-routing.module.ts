import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultInnerComponentPage } from './result-inner-component.page';

const routes: Routes = [
  {
    path: '',
    component: ResultInnerComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultInnerComponentPageRoutingModule {}
