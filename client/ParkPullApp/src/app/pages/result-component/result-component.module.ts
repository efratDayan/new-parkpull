import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultComponentPageRoutingModule } from './result-component-routing.module';

import { ResultComponentPage } from './result-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultComponentPageRoutingModule
  ],
  declarations: [ResultComponentPage]
})
export class ResultComponentPageModule {}
