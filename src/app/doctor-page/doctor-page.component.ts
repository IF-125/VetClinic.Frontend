import { Component, OnInit } from '@angular/core';
import { OrderProceduresOfDoctor } from 'src/models/OrderProceduresOfDoctor';
import { PetsForTreatmentService } from '../services/pets-for-treatment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss']
})
export class DoctorPageComponent implements OnInit {
  
  doctorId: string;
  pets: OrderProceduresOfDoctor[];

  constructor(private service: PetsForTreatmentService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.doctorId = params['doctorId']; 
    });

    this.loadPets();
  }

  loadPets() {
    this.service.getPets(this.doctorId).subscribe(res => {
       this.pets = res;
       console.log(this.pets);
      });
  }
  
  title = 'Veterinary clinic';
  
  displayPopup:boolean=false;
    togglePopup(){
        this.displayPopup=!this.displayPopup;
    }
}
