import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderProceduresOfDoctor } from 'src/models/OrderProceduresOfDoctor';
import { tap } from 'rxjs/operators';
import { Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  APIUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getPets(doctorId: string): Observable<OrderProceduresOfDoctor[]> {
    return this.http
      .get<OrderProceduresOfDoctor[]>(
        `${this.APIUrl}/orderprocedure/GetOrderedProceduresOfDoctor?doctorId=${doctorId}`
      )
      .pipe(tap((data) => data));
  }

  getPetList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/pets');
  }

  getPetListByClientId(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Pets/GetByClientId/' + val);
  }

  addPet(val: any) {
    return this.http.post(this.APIUrl + '/pets', val);
  }

  updatePet(val: any) {
    return this.http.put(this.APIUrl + '/pets', val);
  }

  patchPet(id:any, operation:Operation[]):Observable<any>{
    return this.http.patch(this.APIUrl+'/pets/'+id,operation);
  }

  deletePet(val: any) {
    return this.http.delete(this.APIUrl + '/pets/' + val);
  }

  getPetById(val: any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/pets/' + val);
  }

 
}
