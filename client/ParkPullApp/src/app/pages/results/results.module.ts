import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { ResultComponentPage } from '../result-component/result-component.page';
import { ResultInnerComponentPage } from '../result-inner-component/result-inner-component.page';

@NgModule({
  imports: [
 
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage,
    ResultComponentPage,
    ResultInnerComponentPage]
})
export class ResultsPageModule {}
