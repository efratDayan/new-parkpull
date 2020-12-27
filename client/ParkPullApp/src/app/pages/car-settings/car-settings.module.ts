import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarSettingsPageRoutingModule } from './car-settings-routing.module';

import { CarSettingsPage } from './car-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarSettingsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarSettingsPage]
})
export class CarSettingsPageModule {}
