import { Appointment } from 'src/models/Appointment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operation } from 'fast-json-patch';
import { MedicalReport } from 'src/models/MedicalReport';

@Injectable({
  providedIn: 'root'
})
export class OrderProceduresService {

  private APIUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  addMedicalReport(id:number, medicalReport: MedicalReport){
    return this.http.post(`${this.APIUrl}/OrderProcedure/AddMedicalReport/${id}`, medicalReport);
  }

  addEmployeeAndAppointmentToOrderProcedure(orderProcedureId: number, employeeId: number, appointment: Appointment){
    return this.http.post(`${this.APIUrl}/OrderProcedure/AddAppointmentAndEmployeeToOrderProcedure`, appointment, {
      params:{
          orderProcedureId: orderProcedureId.toString(),
          employeeId: employeeId.toString()
      }
  });
  }
}
