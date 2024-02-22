import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateClubComponent } from './component/create-club/create-club.component';
import { JoinClubComponent } from './component/join-club/join-club.component';
import { ModalpopupComponent } from './component/modalpopup/modalpopup.component';
import { TableComponent } from './component/table/table.component';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
import { ScoreComponent } from './component/score/score.component';
import { DisplayScoreComponent } from './component/display-score/display-score.component';
const routes: Routes = [
  { path: 'createclub',component: CreateClubComponent},
  { path: 'joinclub',component: JoinClubComponent},
  { path: 'info', component: ModalpopupComponent},
  {path:'tableitem',component:TableComponent},
  {path:'createLeague',component:CreateLeagueComponent},
  {path:'score',component:ScoreComponent},
  {path: 'display-score',component:DisplayScoreComponent},
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
