import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from 'src/models/Appointment';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  APIUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAppointments() : Observable<Appointment[]> {
    return this.http.get<any>(this.APIUrl + '/Appointment');
  }

  deleteAppointment(val: any) {
    return this.http.delete(this.APIUrl + '/Appointment/' + val);
  }
}
