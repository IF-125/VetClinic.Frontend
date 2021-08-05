import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44350/api";
   //readonly PhotoUrl = "https://localhost:44350/Photos/";
  
    constructor(private http:HttpClient) { }
  
    getPetList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/pets');
    }

    getPetListByClientId(val:any):Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Pets/GetByClientId/'+val)
    }
  
    addPet(val:any){
      return this.http.post(this.APIUrl+'/pets',val);
    }
  
    updatePet(val:any){
      return this.http.put(this.APIUrl+'/pets',val);
    }
  
    deletePet(val:any){
      return this.http.delete(this.APIUrl+'/pets/'+val);
    }

    getPetById(val:any):Observable<any>{
      return this.http.get<any>(this.APIUrl+'/pets/'+val)
    }

    getClientById(val:any):Observable<any>{
      return this.http.get<any>(this.APIUrl+'/Client?id='+val)
    }

    getProcedureList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/procedure');
    }
}
