import { PetImagesService } from './../../services/pets/pet-images.service';
import { PetsService } from './../../services/pets/pets.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalTypesService } from 'src/app/services/animal-types/animal-types.service';
import { PetClass } from 'src/models/PetClass';
import { Client } from 'src/models/Client';
import { compare } from 'fast-json-patch';


@Component({
  selector: 'app-add-edit-pet',
  templateUrl: './add-edit-pet.component.html',
  styleUrls: ['./add-edit-pet.component.scss'],
})
export class AddEditPetComponent implements OnInit {
  constructor(private AnimalTypesService: AnimalTypesService,
    private PetsService: PetsService,
    private PetImagesService: PetImagesService) { }

  @Input() client: Client;
  animalTypeList: any[];

  @Input() AddEditPet: PetClass = new PetClass();
  @Input() inputPet: any;

  @Input() displayPetEditComponent: boolean;
  @Input() displayPetAddComponent: boolean;

  @Output() closeEvent = new EventEmitter();


  PhotoFilePath: any;
  fileToUpload: File | null = null;


  ngOnInit(): void {
    this.refreshAnimalTypeList();

    if (this.displayPetEditComponent) {
      this.clonePetToImput();
    }
    else {
      this.inputPet = this.AddEditPet;
    }
  }

  clonePetToImput() {
    this.inputPet = JSON.parse(JSON.stringify(this.AddEditPet));
  }


  submitClicked() {
    if (this.displayPetEditComponent) {
      this.patchPet();
    }
    else {
      this.addPet();
    }

    this.uploadImage();

    this.closeEvent.next();
  }

  addPet() {
    this.AddEditPet.clientId = this.client.id

    console.log(this.AddEditPet)

    this.PetsService.addPet(this.AddEditPet).subscribe(
      (data) => {
        this.AddEditPet = data
        console.log(this.AddEditPet)
        this.uploadImage()
      }
    );
  }

  patchPet() {
    let patch = compare(this.AddEditPet, this.inputPet)

    this.PetsService.patchPet(this.AddEditPet.id, patch).subscribe();

    this.cloneObjectToShow(this.AddEditPet, this.inputPet);
  }

  cloneObjectToShow(target: any, source: any) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key];
    });
  }

  refreshAnimalTypeList() {
    this.AnimalTypesService
      .getAnimalTypeList()
      .subscribe((data) => (this.animalTypeList = data));
  }

  setTypeToPet(value: any) {
    this.AddEditPet.animalTypeId = value;
  }

  selectImage(event) {
    this.fileToUpload = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.PhotoFilePath = reader.result;
    }
  }

  uploadImage() {
    if (this.fileToUpload != null && this.AddEditPet.id != null) {
      console.log(this.fileToUpload);

      let petImage = {
        petId: this.AddEditPet.id
      };

      console.log(petImage);

      this.PetImagesService.uploadImage(this.fileToUpload, petImage).subscribe();
    }
  }

  delClicked() {
    this.PetsService.deletePet(this.AddEditPet.id).subscribe();
    this.closeEvent.next();
  }

}



