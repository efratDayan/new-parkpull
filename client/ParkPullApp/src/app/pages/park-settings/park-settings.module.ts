import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkSettingsPageRoutingModule } from './park-settings-routing.module';

import { ParkSettingsPage } from './park-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkSettingsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ParkSettingsPage]
})
export class ParkSettingsPageModule {}
