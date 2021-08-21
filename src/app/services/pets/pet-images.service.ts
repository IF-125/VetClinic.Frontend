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

  uploadImage(fileToUpload: File, petImage):Observable<any>{

    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    
    return this.http.post(this.APIUrl+'​/PetsImages',formData,petImage)
  }

}


