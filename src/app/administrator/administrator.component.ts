import { Employee } from './../../models/Employee';

import { Observable, of } from 'rxjs';
import { ClientsService } from './../services/clients/clients.service';
import { OrderProceduresService } from './../services/order-procedures/order-procedures.service';
import { Appointment } from 'src/models/Appointment';
import { Procedure } from './../../models/Procedure';
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
    private orderProcedureService: OrderProceduresService) {}

  newEmployee: Employee;
  newProcedure: Procedure;
  newAppointment: Appointment;
  Procedures: Observable<Array<any>>;
  Appointments: Observable<Array<any>>;
  Employees: any = [];
  Positions: any = [];

  displayProcedurePopup:boolean=false;
  displayAppointmentPopup:boolean=false;
  displayEmployees:boolean=true;
  displayServices:boolean=false;
  displayAppointments:boolean=false;
  deleteMode:boolean=false;

  fromEdit:string;
  toEdit:string;
  orderProcedureIdEdit:number;
  doctorIdEdit:number;
  appointmentId:number;

  procedureIdEdit:number;
  nameEdit:string;
  durationEdit:string;
  priceEdit:number;
  descriptionEdit:string;
  editedProcedure: Procedure;

  ngOnInit(): void {
    this.getProcedures();
    this.getAppointments();
    this.getEmployees();
    this.getPositions();
    
    this.displayEmployees=localStorage.getItem("displayEmployees")=="true";
    this.displayServices=localStorage.getItem("displayServices")=="true";
    this.displayAppointments=localStorage.getItem("displayAppointments")=="true";
  }

  toggleAppointmentPopup(appointmentId:number, from: string, to: string, orderProcedureId: number, doctorId: number){
    this.appointmentId = appointmentId;
    this.fromEdit = from;
    this.toEdit = to;
    this.orderProcedureIdEdit = orderProcedureId;
    this.doctorIdEdit = doctorId;
    this.displayAppointmentPopup=!this.displayAppointmentPopup;
    console.log(orderProcedureId);
  }

  toggleProcedurePopup(procedureId:number, name:string, duration: string, price: number, description: string){
    this.procedureIdEdit = procedureId;
    this.nameEdit = name;
    this.durationEdit = duration;
    this.priceEdit = price;
    this.descriptionEdit = description;
    this.displayProcedurePopup=!this.displayProcedurePopup;
    console.log(this.nameEdit = name);
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

  updateProcedure(title:string, duration:string, description:string, price:number){
    this.editedProcedure = new Procedure();

    this.editedProcedure.id = this.procedureIdEdit;
    this.editedProcedure.title = title;
    this.editedProcedure.duration = duration;
    this.editedProcedure.description = description;
    this.editedProcedure.price = price.toString();

    this.procedureService.putProcedure(this.procedureIdEdit, this.editedProcedure).subscribe((data) => {
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
      console.log(this.Employees);
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

  deleteEmployee(id){
    if(this.deleteMode){
      this.employeeService.deleteEmployee(id).subscribe((data) => {
        this.ngOnInit();
      });
    }
  }

  getPositions() {
    this.positionService.getPositions().subscribe((data) => {
      this.Positions = data;
    });
  }
}
