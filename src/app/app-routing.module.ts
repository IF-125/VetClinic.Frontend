import { AdministratorComponent } from './administrator/administrator.component';
import { AppointmentComponent } from './appointment-page/appointment.component';
import { ClientComponent } from './client-page/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { HomeComponent } from './home-page/home.component';
import { ProceduresComponent } from './procedures-page/procedures.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './services/authorization/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate : [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent},
  { path: 'client/:clientId', component: ClientComponent},
  { path: 'client/pet', component: HomeComponent },
  { path: 'doctor/:doctorId', component: DoctorPageComponent},
  { path: 'procedures', component: ProceduresComponent},
  { path: 'register' , component: RegistrationFormComponent},
  { path: 'login' , component: LoginFormComponent},
  { path: 'administrator', component: AdministratorComponent},
  { path: 'appointment', component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
