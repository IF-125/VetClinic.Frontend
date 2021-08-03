import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AddEditPetComponent } from './pet/add-edit-pet/add-edit-pet.component';
import { PetComponent } from './pet/pet.component';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { ServicesComponent } from './Services/services.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navigation/navbar.component';
import { ClientComponent } from './client/client.component';
import { EditProfComponent } from './client/edit-prof/edit-prof.component';
import { ShowPetComponent } from './client/show-pet/show-pet.component';

import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PetComponent,
    ShowPetComponent,
    AddEditPetComponent,
    ClientComponent,
    EditProfComponent,
    ServicesComponent,
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