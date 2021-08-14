import { HttpClient } from '@angular/common/http';
import { PetsService } from './../../services/pets/pets.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalTypesService } from 'src/app/services/animal-types/animal-types.service';
import { PetClass } from 'src/models/PetClass';
import { Client } from 'src/models/Client';
import { Pet } from 'src/models/Pet';
import { compare } from 'fast-json-patch';

@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.scss'],
})
export class AddEditPetComponent implements OnInit {
  constructor(private service: AnimalTypesService, private PetsService:PetsService) {}

  @Input() client:Client;
  animalTypeList: any[];

  @Input()petToAdd:PetClass=new PetClass();
  @Input()petToEdit:Pet;
  @Input()inputPet:any;

  @Input()displayPetEditComponent:boolean;
  @Input()displayPetAddComponent: boolean;

  @Output() closeEvent = new EventEmitter();

  //petToEdit:Pet;

  PhotoFileName: string;
  PhotoFilePath: string;

  ngOnInit(): void {
    this.refreshAnimalTypeList();

    if(this.displayPetEditComponent){
      this.clonePetToImput(); 
    }
    else{
      this.inputPet=this.petToAdd;
    }

    
  }

  clonePetToImput() {
    this.inputPet = JSON.parse(JSON.stringify(this.petToEdit));
  }
  submitClicked(){
    
    if(this.displayPetEditComponent){
      this.patchPet();
    }
    else{
      this.addPet();
    }

    this.closeEvent.next();

  }

  addPet(){
    this.petToAdd.clientId=this.client.id
    
    this.PetsService.addPet(this.petToAdd).subscribe();

  }

  patchPet(){
    let patch=compare(this.petToEdit,this.inputPet)

    this.PetsService.patchPet(this.petToEdit.id,patch).subscribe();

    this.cloneObjectToShow(this.petToEdit, this.inputPet);


  }

  cloneObjectToShow(target: any, source: any) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key]
    });
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
