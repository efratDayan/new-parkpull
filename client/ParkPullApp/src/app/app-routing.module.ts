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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-with-name',
    loadChildren: () => import('./pages/login-with-name/login-with-name.module').then( m => m.LoginWithNamePageModule)
  },
  {
    path: 'car-settings-for-edit',
    loadChildren: () => import('./pages/car-settings-for-edit/car-settings-for-edit.module').then( m => m.CarSettingsForEditPageModule)
  },
  {
    path: 'park-settings-for-edit',
    loadChildren: () => import('./pages/park-settings-for-edit/park-settings-for-edit.module').then( m => m.ParkSettingsForEditPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then( m => m.AddCarPageModule)
  },
  {
    path: 'add-park',
    loadChildren: () => import('./pages/add-park/add-park.module').then( m => m.AddParkPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'result-component',
    loadChildren: () => import('./pages/result-component/result-component.module').then( m => m.ResultComponentPageModule)
  },
  {
    path: 'result-inner-component',
    loadChildren: () => import('./pages/result-inner-component/result-inner-component.module').then( m => m.ResultInnerComponentPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./pages/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },  {
    path: 'pay-pal',
    loadChildren: () => import('./pages/pay-pal/pay-pal.module').then( m => m.PayPalPageModule)
  },









    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
