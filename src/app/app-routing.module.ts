import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:'home',component: HomeComponent},
  { path: 'register', component:RegisterComponent ,loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', component:LoginComponent,loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
