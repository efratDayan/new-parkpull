import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkSettingsForEditPageRoutingModule } from './park-settings-for-edit-routing.module';

import { ParkSettingsForEditPage } from './park-settings-for-edit.page';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    GooglePlaceModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0)', 
      backdropBorderRadius: '0.01px',
      primaryColour: 'green', 
      secondaryColour: 'green', 
      tertiaryColour: 'green'
    }),
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyD7Wui1ikC-x4CMLYBpPz-8Yutf2l3glNo',
     libraries: ["places"]
    }),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ParkSettingsForEditPageRoutingModule
  ],
  declarations: [ParkSettingsForEditPage]
})
export class ParkSettingsForEditPageModule {}
