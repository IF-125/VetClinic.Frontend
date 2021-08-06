import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.scss']
})
export class AddEditPetComponent implements OnInit {

  constructor(private service:SharedService) { }

  animalTypeList:any[];
  

  ngOnInit(): void {
    this.refreshAnimalTypeList();

  }

  PhotoFileName:string;
  PhotoFilePath:string;

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

  }

  refreshAnimalTypeList(){
    
    this.service.getAnimalTypeList().subscribe(data=>
      this.animalTypeList=data)
    
  }
}
