import { Injectable } from '@angular/core';
import { UserForRegistration } from 'src/models/UserForRegistration'; 
import { RegistrationResponse } from 'src/models/RegistrationResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  ApiUrl: string = environment.baseApiUrl; 

  constructor(private _http: HttpClient) { }

  public registerUser = (route: string, body: UserForRegistration) => {
    return this._http.post<RegistrationResponse> (this.createCompleteRoute(route, this.ApiUrl), body);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}