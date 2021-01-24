import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultInnerComponentPageRoutingModule } from './result-inner-component-routing.module';

import { ResultInnerComponentPage } from './result-inner-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultInnerComponentPageRoutingModule
  ],
  declarations: [ResultInnerComponentPage]
})
export class ResultInnerComponentPageModule {}
