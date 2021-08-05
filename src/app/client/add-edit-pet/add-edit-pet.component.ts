import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.scss']
})
export class AddEditPetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PhotoFileName:string;
  PhotoFilePath:string;

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    // this.service.UploadPhoto(formData).subscribe((data:any)=>{
    //   this.PhotoFileName=data.toString();
    //   this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    // })
  }

}
