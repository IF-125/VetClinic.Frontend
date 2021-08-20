import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from '../services/appointments/appointment.service';
import { PetsService } from '../services/pets/pets.service';
import { MedicalCard } from 'src/models/MedicalCard';
import { Pet } from 'src/models/Pet';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss'],
})
export class DoctorPageComponent implements OnInit {
  title = 'Veterinary clinic';
  displayPopup: boolean = false;
  displayMedicalCardPopup: boolean = false;
  displayConclusionPopup: boolean = false;
  switchToMedicalCard: boolean = true;
  doctorId: string;
  pets: Pet[];
  appointments: Appointment[];
  medicalCard: MedicalCard;

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
    });
  }

  loadAppointments() {
    this.appointmentService.getAppointments().subscribe((res) => {
      this.appointments = res;
      console.log(this.appointments);
    });
  }

  loadMedicalCard(petId: number) {
    this.petService.getMedicalCardOfPet(petId).subscribe((res) => {
      this.medicalCard = res;
      console.log(res);
    })
  }

  openMedicalCard(petId: number) {
    this.displayMedicalCardPopup = !this.displayMedicalCardPopup;
    console.log(petId);
    if(petId) {
      this.loadMedicalCard(petId);
    }
  }

  togglePopup() {
    this.displayPopup = !this.displayPopup;

    if (this.displayPopup) {
      this.loadAppointments();
    }
  }

  showConclusionPopup() {
    this.switchToMedicalCard = false;
    this.displayConclusionPopup = true;
  }

  showMedicalCard() {
    this.switchToMedicalCard = true;
    this.displayConclusionPopup = false;
  }
}
