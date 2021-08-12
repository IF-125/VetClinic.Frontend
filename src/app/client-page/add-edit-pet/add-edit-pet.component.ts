import { PetsService } from './../../services/pets/pets.service';
import { Component, Input, OnInit } from '@angular/core';
import { AnimalTypesService } from 'src/app/services/animal-types/animal-types.service';
import { PetClass } from 'src/models/PetClass';
import { Client } from 'src/models/Client';

@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.scss'],
})
export class AddEditPetComponent implements OnInit {
  constructor(private service: AnimalTypesService, private PetsService:PetsService) {}

  @Input() client:Client;
  animalTypeList: any[];

  petToAdd:PetClass=new PetClass();

  PhotoFileName: string;
  PhotoFilePath: string;

  ngOnInit(): void {
    this.refreshAnimalTypeList();
    
  }

  addPet(){
    this.petToAdd.clientId=this.client.id
    
    this.PetsService.addPet(this.petToAdd).subscribe();

  }

  setTypeToPet(value:any) {
  
    this.petToAdd.animalTypeId = value;
  }



  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
  }

  refreshAnimalTypeList() {
    this.service
      .getAnimalTypeList()
      .subscribe((data) => (this.animalTypeList = data));
  }
}
