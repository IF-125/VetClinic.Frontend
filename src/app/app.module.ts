import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AddEditPetComponent } from './pet/add-edit-pet/add-edit-pet.component';
import { PetComponent } from './pet/pet.component';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navigation/navbar.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ClientComponent } from './client/client.component';
import { EditProfComponent } from './client/edit-prof/edit-prof.component';
import { ShowPetComponent } from './client/show-pet/show-pet.component';

import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DoctorPageComponent,
    PetComponent,
    ShowPetComponent,
    AddEditPetComponent,
    ClientComponent,
    EditProfComponent,
    ProceduresComponent,
    HomeComponent,
    ProceduresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }