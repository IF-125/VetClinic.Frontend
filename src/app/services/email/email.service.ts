import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  APIUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  sendEmail(val: any){
    return this.http.post(this.APIUrl + '/Email', val, {
      responseType: 'text' 
   })  
  }
}
