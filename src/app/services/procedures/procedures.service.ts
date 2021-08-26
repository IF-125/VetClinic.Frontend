import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  APIUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getProcedureList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/procedure');
  }

  addProcedure(val: any) {
    return this.http.post(this.APIUrl + '/procedure', val);
  }

  deleteProcedure(val: any) {
    return this.http.delete(this.APIUrl + '/procedure/' + val);
  }
}
