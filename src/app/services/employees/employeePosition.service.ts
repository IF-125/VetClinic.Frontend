import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {

  constructor(private http: HttpClient) { }
  APIUrl: string = environment.baseApiUrl;

  addEmployeePosition(val: any){
    return this.http.post(this.APIUrl + '/EmployeePositions', val);
  }
}
