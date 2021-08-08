import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalTypesService {
  APIUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAnimalTypeList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/AnimalTypes');
  }
}
