import { Client } from './../../../models/Client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Operation}from 'fast-json-patch';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  APIUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getClientById(val: any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Client?id=' + val);
  }

  addClient(val: any) {
    return this.http.post(this.APIUrl + '/Client', val);
  }

  patchClient(id: any, operation:Operation[]): Observable<any> {

    
    return this.http.patch(this.APIUrl + '/Client/' + id, operation);
  }
}
