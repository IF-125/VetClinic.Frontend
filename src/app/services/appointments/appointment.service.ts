import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments() : Observable<Appointment[]> {
    return this.http.get<any>(`https://localhost:44350/api/Appointment`);
  }
}
