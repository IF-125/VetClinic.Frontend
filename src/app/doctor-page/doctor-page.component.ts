import { Component, OnInit } from '@angular/core';
import { OrderProceduresOfDoctor } from 'src/models/OrderProceduresOfDoctor';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from '../services/appointments/appointment.service';
import { PetsService } from '../services/pets/pets.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss'],
})
export class DoctorPageComponent implements OnInit {
  title = 'Veterinary clinic';
  displayPopup: boolean = false;
  displayMedicalCardPopup: boolean = false;
  doctorId: string;
  pets: OrderProceduresOfDoctor[];
  appointments: Appointment[];

  constructor(
    private petService: PetsService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.doctorId = params['doctorId'];
    });

    this.loadPets();
  }

  loadPets() {
    this.petService.getPets(this.doctorId).subscribe((res) => {
      this.pets = res;
      console.log(this.pets);
    });
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe((res) => {
      this.appointments = res;
      console.log(this.appointments);
    });
  }

  openMedicalCard(id: number) {
    this.displayMedicalCardPopup = !this.displayMedicalCardPopup;
  }

  togglePopup() {
    this.displayPopup = !this.displayPopup;

    if (this.displayPopup) {
      this.loadAppointments();
    }
  }
}
