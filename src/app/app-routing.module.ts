import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  // {
  //   path: 'app',
  //   component: AppComponent,
  //   // children: [
  //   //   {
  //   //     path: '',
  //   //     component: SignupComponent
  //   //   },
  //   //   {
  //   //     path:'',
  //   //     component: RegisterComponent
  //   //   }
  //   // ]
  // },
  { path: 'register', component: RegisterComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
