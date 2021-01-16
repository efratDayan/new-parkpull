import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWithNamePageRoutingModule } from './login-with-name-routing.module';

import { LoginWithNamePage } from './login-with-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginWithNamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginWithNamePage]
})
export class LoginWithNamePageModule {}
