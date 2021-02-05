import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import {AgmCoreModule} from '@agm/core'
import {GooglePlaceModule} from 'ngx-google-places-autocomplete'
import {NgxLoadingModule, ngxLoadingAnimationTypes} from 'ngx-loading'



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

    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
