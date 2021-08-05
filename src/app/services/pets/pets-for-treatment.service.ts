import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OrderProceduresOfDoctor } from 'src/models/OrderProceduresOfDoctor';

@Injectable({
  providedIn: 'root'
})
export class PetsForTreatmentService {

  constructor(private http: HttpClient) {
    
  }

  getPets(doctorId: string) : Observable<OrderProceduresOfDoctor[]> {
    return this.http.get<OrderProceduresOfDoctor[]>(`https://localhost:44350/api/orderprocedure/GetOrderedProceduresOfDoctor?doctorId=${doctorId}`)
                    .pipe(
                      tap(data => data)
                    )
  }
}
