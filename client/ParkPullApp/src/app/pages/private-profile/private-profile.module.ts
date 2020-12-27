import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrivateProfilePageRoutingModule } from './private-profile-routing.module';
import { PrivateProfilePage } from './private-profile.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PrivateProfilePage]
})
export class PrivateProfilePageModule {}
