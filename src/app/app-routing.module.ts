import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'pet',component:PetComponent},
  {path:'client',component:ClientComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'client/pet', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
