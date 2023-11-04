import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'jobslist',component:JobslistComponent},
  {path:'jobdetails',component:JobdetailsComponent},
  {path:'myjobs',component:MyjobsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
