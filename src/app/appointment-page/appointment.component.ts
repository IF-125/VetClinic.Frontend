import { PetsService } from 'src/app/services/pets/pets.service';
import { Component } from "@angular/core";
import { ProceduresService } from '../services/procedures/procedures.service';

@Component({
    selector: 'section-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
    constructor(private proceduresService: ProceduresService, private petsService: PetsService) {}
    
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
}