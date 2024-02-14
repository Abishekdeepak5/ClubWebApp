import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateClubComponent } from './component/create-club/create-club.component';
import { JoinClubComponent } from './component/join-club/join-club.component';
import { ModalpopupComponent } from './component/modalpopup/modalpopup.component';
const routes: Routes = [
  { path: 'createclub',component: CreateClubComponent},
  { path: 'joinclub' , component: JoinClubComponent },
  { path: 'info', component: ModalpopupComponent},
  { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:'home',component: HomeComponent},
  // { path: 'register', component:RegisterComponent ,loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  // { path: 'login', component:LoginComponent,loadChildren: () => import('./components/login/login.module')./then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:'table',loadChildren: () => import('./components/tabledisplay/tabledisplay.module').then(m => m.TableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
