import { AppointmentComponent } from './Appointment/appointment.component';
import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './Home/home.component';
import { ProceduresComponent } from './Procedures/procedures.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pet', component:PetComponent},
  { path: 'client', component:ClientComponent},
  { path: 'client/pet', component: HomeComponent },
  { path: 'doctor-page', component: DoctorPageComponent},
  { path: 'procedures', component: ProceduresComponent},
  { path: 'appointment', component: AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
