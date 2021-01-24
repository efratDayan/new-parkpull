import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParkPageRoutingModule } from './add-park-routing.module';

import { AddParkPage } from './add-park.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddParkPageRoutingModule
  ],
  declarations: [AddParkPage]
})
export class AddParkPageModule {}
