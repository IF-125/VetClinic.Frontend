import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  APIUrl: string = environment.baseApiUrl;

  getEmployees(){
    return this.http.get<any>(this.APIUrl + `/Employees`);
  }

  addEmployee(val: any){
    return this.http.post(this.APIUrl + '/Employees', val);
  }

  deleteEmployee(id: any) {
    return this.http.delete(this.APIUrl + '/Employees/' + id);
  }
}
