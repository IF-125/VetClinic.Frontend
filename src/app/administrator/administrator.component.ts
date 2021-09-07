
import { Observable, of } from 'rxjs';
import { ClientsService } from './../services/clients/clients.service';
import { OrderProceduresService } from './../services/order-procedures/order-procedures.service';
import { Appointment } from 'src/models/Appointment';
import { Procedure } from './../../models/Procedure';
import { Clients } from './../../models/Clients';
import { PositionService } from './../services/positions/position.service';
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
  constructor(private positionService: PositionService, private employeeService: EmployeeService, 
    private procedureService: ProceduresService, private appointmentService: AppointmentService,
    private orderProcedureService: OrderProceduresService, private clientService: ClientsService) {}

  newProcedure: Procedure;
  newAppointment: Appointment;
  newClient: Clients;
  Procedures: Observable<Array<any>>;
  Appointments: Observable<Array<any>>;
  Employees: any = [];
  Positions: any = [];

  displayPopup:boolean=false;
  displayEmployees:boolean=true;
  displayServices:boolean=false;
  displayAppointments:boolean=false;
  deleteMode:boolean=false;

  ngOnInit(): void {
    this.getProcedures();
    this.getAppointments();
    this.getEmployees();
    this.getPositions();
    
    this.displayEmployees=localStorage.getItem("displayEmployees")=="true";
    this.displayServices=localStorage.getItem("displayServices")=="true";
    this.displayAppointments=localStorage.getItem("displayAppointments")=="true";
  }

    togglePopup(){
        this.displayPopup=!this.displayPopup;
    }

  showEmployees(){
    this.displayEmployees=true;
    this.displayServices=false;
    this.displayAppointments=false;
    this.saveState();
  }
  showServices(){
    this.displayEmployees=false;
    this.displayServices=true;
    this.displayAppointments=false;
    this.saveState();
  }
  showAppointments(){
    this.displayEmployees=false;
    this.displayServices=false;
    this.displayAppointments=true;
    this.saveState();
  }

  toggleDelete(){
    this.deleteMode=!this.deleteMode;
  }
  
  saveState(){
    localStorage.setItem('displayEmployees', this.displayEmployees.toString());
    localStorage.setItem('displayServices', this.displayServices.toString());
    localStorage.setItem('displayAppointments', this.displayAppointments.toString());
  }

  getProcedures() {
    this.procedureService.getProcedureList().subscribe((data) => {
      this.Procedures = of(data);
    });
  }

  postProcedure(procedureTitle: string, procedureDuration: string, procedurePrice: string, procedureDescription: string){
    this.newProcedure = new Procedure();

    this.newProcedure.title = procedureTitle;
    this.newProcedure.duration = procedureDuration;
    this.newProcedure.description = procedureDescription;
    this.newProcedure.price = procedurePrice;
    this.newProcedure.animalTypesIds = [1];

    this.procedureService.addProcedure(this.newProcedure).subscribe((data) => {
      this.ngOnInit();
    });
  }

  deleteProcedure(id){
    if(this.deleteMode){
      this.procedureService.deleteProcedure(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.Appointments = of(data);
    });
  }

  postAppointment(from: string, to: string, orderProcedureId: number, doctorId: number) {
    this.newAppointment = new Appointment();

    this.newAppointment.from = from;
    this.newAppointment.to = to;
    this.newAppointment.status = 1;

    this.orderProcedureService.addEmployeeAndAppointmentToOrderProcedure(orderProcedureId, doctorId, this.newAppointment).subscribe((data) => {
      this.ngOnInit();
    });
  }

  deleteAppointment(id){
    if(this.deleteMode){
      this.appointmentService.deleteAppointment(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.Employees = data;
    });
  }
  registerEmployee(firstName: string, lastName: string, position: number, address: string, email: string){
    this.newEmployee = new Employee();
    this.newEmployee.firstName = firstName;
    this.newEmployee.lastName = lastName;
    this.newEmployee.email = email;
    this.newEmployee.address = address;
    this.newEmployee.position = position.toString();
    this.employeeService.addEmployee(this.newEmployee).subscribe((data) => {
      this.ngOnInit();
      console.log(data);
    });
  }

  getPositions() {
    this.positionService.getPositions().subscribe((data) => {
      this.Positions = data;
    });
  }
}
