import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetImage } from 'src/models/PetImage';

@Injectable({
  providedIn: 'root'
})
export class PetImagesService {

  APIUrl: string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  uploadImage(fileToUpload: File, petImage:PetImage):Observable<any>{

    console.log(fileToUpload)
    console.log(petImage)
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload);
    const mData = JSON.stringify(petImage);
    formData.append('data', mData);

    console.log(formData)
    
    return this.http.post(this.APIUrl+ '/PetsImages',formData)
 
  }

}


