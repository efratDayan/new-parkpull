import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import { ResultComponentPage } from '../result-component/result-component.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { ResultInnerComponentPage } from '../result-inner-component/result-inner-component.page';

@NgModule({
  imports: [
    ResultComponentPage,
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPageRoutingModule
  ],
  declarations: [ResultPage,
    ResultComponentPage,
    ResultInnerComponentPage
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultPageModule {}
