import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
const routes: Routes = [
  //{
    //path: '',
    //loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
     //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  //},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'car-settings',
    loadChildren: () => import('./pages/car-settings/car-settings.module').then( m => m.CarSettingsPageModule)
  },
  {
    path: 'park-settings',
    loadChildren: () => import('./pages/park-settings/park-settings.module').then( m => m.ParkSettingsPageModule)
  },
  {
    path: 'registration-success',
    loadChildren: () => import('./pages/registration-success/registration-success.module').then( m => m.RegistrationSuccessPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'private-profile',
    loadChildren: () => import('./pages/private-profile/private-profile.module').then( m => m.PrivateProfilePageModule)
  },
  {
    path: 'result/:res',
    loadChildren: () => import('./pages/result/result.module').then( m => m.ResultPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-with-name',
    loadChildren: () => import('./pages/login-with-name/login-with-name.module').then( m => m.LoginWithNamePageModule)
  },





    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
