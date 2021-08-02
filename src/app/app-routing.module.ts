import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPageComponent } from './doctor-page/doctor-page.component';

const routes: Routes = [
  {path: 'doctor-page', component: DoctorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
