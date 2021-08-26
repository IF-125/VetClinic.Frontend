import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetImage } from 'src/models/PetImage';
import { PetSharedService } from 'src/app/services/pets/pet-shared.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetImagesService {

  APIUrl: string = environment.baseApiUrl;

  constructor(private http:HttpClient,
    private PetSharedService:PetSharedService) { }

  uploadImage(fileToUpload: File, petImage:PetImage):Observable<any>{

    const formData: FormData = new FormData();
    formData.append("file", fileToUpload);
    const mData = JSON.stringify(petImage);
    formData.append('data', mData);
    
    return this.http.post(this.APIUrl+ '/PetsImages',formData).pipe(
      tap(()=>{
        this.PetSharedService._refreshNeeded$.next();
      })
    );
 
  }

  getAllPetImages(petId:number):Observable<any>{
    return this.http.get(this.APIUrl+'/PetsImages?petId='+petId)
  }

}


