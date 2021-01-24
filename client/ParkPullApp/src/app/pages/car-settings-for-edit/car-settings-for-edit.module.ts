import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarSettingsForEditPageRoutingModule } from './car-settings-for-edit-routing.module';

import { CarSettingsForEditPage } from './car-settings-for-edit.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CarSettingsForEditPageRoutingModule
  ],
  declarations: [CarSettingsForEditPage]
})
export class CarSettingsForEditPageModule {}
