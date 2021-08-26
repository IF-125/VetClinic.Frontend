import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProcedureService {

  APIUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  addOrderProcedure(petId:string, procedureId:string, val: any) {
    return this.http.post(this.APIUrl + '/OrderProcedure', val, {
            params:{
                petId: petId,
                procedureId: procedureId
            }
        });
    }
  }
