import { AdministratorComponent } from './administrator/administrator.component';
import { AppointmentComponent } from './appointment-page/appointment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './home-page/home.component'; 
import { ProceduresComponent } from './procedures-page/procedures.component'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ClientComponent } from './client-page/client.component';
import { EditProfComponent } from './client-page/edit-prof/edit-prof.component';
import { ShowPetComponent } from './client-page/show-pet/show-pet.component';
import { AddEditPetComponent } from './client-page/add-edit-pet/add-edit-pet.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ShowImagesComponent } from './client-page/show-images/show-images.component';
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DoctorPageComponent,
    ShowPetComponent,
    ClientComponent,
    EditProfComponent,
    ProceduresComponent,
    AddEditPetComponent,
    HomeComponent,
    AppointmentComponent,
    RegistrationFormComponent,
    LoginFormComponent
    AdministratorComponent,
    ShowImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageDisplayModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }