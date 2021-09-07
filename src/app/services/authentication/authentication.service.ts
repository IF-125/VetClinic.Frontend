import { Injectable } from '@angular/core';
import { UserForRegistration } from 'src/models/UserForRegistration'; 
import { UserForAuthentication } from 'src/models/UserForAuth';
import { RegistrationResponse } from 'src/models/RegistrationResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  ApiUrl: string = environment.baseApiUrl; 
  isUserLoggedIn : boolean = false;
  isAdmin: boolean = false;

  constructor(private _http: HttpClient) { }


  public loginUser = (route: string, body: UserForAuthentication) => {
    this.isUserLoggedIn = true;
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn? "true" : "false");
    return this._http.post(this.createCompleteRoute(route, this.ApiUrl), body);
  }

  public registerUser = (route: string, body: UserForRegistration) => {
    return this._http.post<RegistrationResponse> (this.createCompleteRoute(route, this.ApiUrl), body);
  }

  public CheckAdmin(){
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    var role =  decoded['role'];
    console.log(role);
    return role == "Admin";
  }

  public logout = (route: string) => {
    localStorage.removeItem("token");
    localStorage.removeItem("isUserLoggedIn");

   
    return this._http.post(this.createCompleteRoute(route, this.ApiUrl), "/Logout");
  }
  
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}