import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  {
    path:'login',
    component: SignupComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
