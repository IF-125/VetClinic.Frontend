import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetSharedService {

  constructor() { }

  public _refreshNeeded$=new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded$;
  }
}
