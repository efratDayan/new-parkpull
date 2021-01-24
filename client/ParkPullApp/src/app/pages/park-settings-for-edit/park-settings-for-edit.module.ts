import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkSettingsForEditPageRoutingModule } from './park-settings-for-edit-routing.module';

import { ParkSettingsForEditPage } from './park-settings-for-edit.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ParkSettingsForEditPageRoutingModule
  ],
  declarations: [ParkSettingsForEditPage]
})
export class ParkSettingsForEditPageModule {}
