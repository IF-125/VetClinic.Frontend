import { AddEditPetComponent } from './pet/add-edit-pet/add-edit-pet.component';
import { PetComponent } from './pet/pet.component';

import { FooterComponent } from './Footer/footer.component';
import { AppointmentBookingComponent } from './Appointment-booking/appointment-booking.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navigation/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedService } from './shared.service';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { EditProfComponent } from './client/edit-prof/edit-prof.component';
import { ShowPetComponent } from './client/show-pet/show-pet.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentBookingComponent,
    PetComponent,
    ShowPetComponent,
    AddEditPetComponent,
    ClientComponent,
    EditProfComponent,
    HomeComponent
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
