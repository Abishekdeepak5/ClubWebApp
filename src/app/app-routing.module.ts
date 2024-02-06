import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:'home',component: HomeComponent},
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
