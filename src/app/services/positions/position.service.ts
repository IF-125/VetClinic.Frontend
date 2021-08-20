import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getPositions() {
    return this.http.get<any>(`https://localhost:44350/api/Positions`);
  }
}
