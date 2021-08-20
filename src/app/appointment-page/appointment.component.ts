import { Email } from './../../models/Email';
import { EmailService } from './../services/email/email.service';
import { PetsService } from 'src/app/services/pets/pets.service';
import { Component } from "@angular/core";
import { ProceduresService } from '../services/procedures/procedures.service';

@Component({
    selector: 'section-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
    constructor(private emailService : EmailService, private proceduresService: ProceduresService, private petsService: PetsService) {}
    
    email: Email;
    showCardForm = false;
    isDisabled = false;
    Procedures: any = [];
    Pets: any = [];
  
    ngOnInit(): void {
      this.getProcedures();
      this.getPets();
    }
  
    getProcedures() {
      this.proceduresService.getProcedureList().subscribe((data) => {
        this.Procedures = data;
      });
    }

    getPets() {
        this.petsService.getPetList().subscribe((data) => {
          this.Pets = data;
        });
      }

    displayCardForm(value){
        this.showCardForm = value;
    }

    sendEmail(PetId: any, ProcedureId: any){
      this.email = new Email();
      this.email.pet = PetId;
      this.email.procedure = ProcedureId;
      console.log(this.email);
      this.emailService.sendEmail(this.email);
    }
}