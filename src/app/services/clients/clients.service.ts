import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  APIUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getClientById(val: any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Client?id=' + val);
  }
}
