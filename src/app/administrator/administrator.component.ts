import { PositionService } from './../services/positions/position.service';
import { Procedure } from './../../models/Procedure';
import { AppointmentService } from './../services/appointments/appointment.service';
import { ProceduresService } from './../services/procedures/procedures.service';
import { EmployeeService } from './../services/employees/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss'],
})
export class AdministratorComponent{
  constructor(private positionService: PositionService, private employeeService: EmployeeService, private procedureService: ProceduresService, private appointmentService: AppointmentService) {}

  newProcedure: Procedure;
  Procedures: any = [];
  Appointments: any = [];
  Employees: any = [];
  Positions: any = [];

  displayEmployees:boolean=true;
  displayServices:boolean=false;
  displayAppointments:boolean=false;

  ngOnInit(): void {
    this.getProcedures();
    this.getAppointments();
    this.getEmployees();
    this.getPositions();
  }

  showEmployees(){
    this.displayEmployees=true;
    this.displayServices=false;
    this.displayAppointments=false;
  }
  showServices(){
    this.displayEmployees=false;
    this.displayServices=true;
    this.displayAppointments=false;
  }
  showAppointments(){
    this.displayEmployees=false;
    this.displayServices=false;
    this.displayAppointments=true;
  }

  getProcedures() {
    this.procedureService.getProcedureList().subscribe((data) => {
      this.Procedures = data;
    });
  }

  postProcedure(procedureTitle: string, procedureDuration: string, procedurePrice: string, procedureDescription: string){
    this.newProcedure = new Procedure();

    this.newProcedure.title = procedureTitle;
    this.newProcedure.duration = procedureDuration;
    this.newProcedure.description = procedureDescription;
    this.newProcedure.price = procedurePrice;

    this.procedureService.addProcedure(this.newProcedure).subscribe();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.Appointments = data;
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.Employees = data;
    });
  }

  formatDate(date:string){
    return date;
  }

  formatTime(date:string){
    return date;
  }

  getPositions() {
    this.positionService.getPositions().subscribe((data) => {
      this.Positions = data;
    });
  }
}
