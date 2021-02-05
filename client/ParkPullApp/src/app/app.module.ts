import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultComponentPage } from './pages/result-component/result-component.page';
import { CommonModule } from '@angular/common';
import { LoginWithNamePage } from './pages/login-with-name/login-with-name.page';
import { LoginPage } from './pages/login/login.page';


@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
  HttpClientModule
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
