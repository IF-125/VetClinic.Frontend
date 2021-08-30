import { Email } from './../../models/Email';
import { EmailService } from './../services/email/email.service';
import { PetsService } from 'src/app/services/pets/pets.service';
import { Component } from "@angular/core";
import { ProceduresService } from '../services/procedures/procedures.service';
import { OrderProcedureService } from '../services/orderProcedure/orderProcedure.service';

@Component({
    selector: 'section-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
    constructor(private emailService : EmailService, private proceduresService: ProceduresService, 
      private petsService: PetsService, private orderProcedureService: OrderProcedureService) {}
    
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

    onSubmit(petId: any, procedureId: any, isPaid: boolean){
      if(isPaid){
        this.createOrderProcedure(petId, procedureId, 2);
      }else{
        this.createOrderProcedure(petId, procedureId, 1);
      }
    }

    sendEmail(petId: any, procedureId: any, orderProcedureId: any){
      this.email = new Email();
      this.email.pet = petId;
      this.email.procedure = procedureId;
      this.email.orderProcedure = orderProcedureId.toString();
      console.log(this.email);
      this.emailService.sendEmail(this.email).subscribe();
    }

    createOrderProcedure(petId: number, procedureId: number, paymentMethod: number){
      this.orderProcedureService.addOrderProcedure(petId.toString(), procedureId.toString(), paymentMethod).subscribe(data => {
        this.sendEmail(petId, procedureId, data);
      });
    }
}