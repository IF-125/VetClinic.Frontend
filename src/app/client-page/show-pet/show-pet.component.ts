import { MedicalCard } from './../../../models/MedicalCard';
import { Component, Input, OnInit } from '@angular/core';
import { PetSharedService } from 'src/app/services/pets/pet-shared.service';
import { PetsService } from 'src/app/services/pets/pets.service';
import { Client } from 'src/models/Client';
import { Pet } from 'src/models/Pet';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss'],
})
export class ShowPetComponent implements OnInit {
  constructor(
    private petService: PetsService,
    private petSharedService:PetSharedService) {}

  @Input() clientId = '';
  @Input() client: Client;

  PetList: Pet[] = [];
  selectedPet: any;

  petPopupTitle:string;
  displayPetEditComponent:boolean=false;
  testDisplay:boolean=false;
  displayMEd:boolean=false;

  displayShowImagesComponent:boolean=false;

  ////medical card aria
  medicalCard: MedicalCard;
  displayMedicalCardPopup: boolean = false;

  switchToMedicalCard: boolean = true;
  displayConclusionPopup: boolean = false;
  conclusion: string;

  

  ngOnInit(): void {

    this.petSharedService.refreshNeeded.subscribe(
      ()=>{this.refreshPetList();}
    );
    this.refreshPetList();
  }

  refreshPetList() {
    this.petService.getPetListByClientId(this.clientId).subscribe((data) => {
      this.PetList = data;
    });
  }

  toggleEditPetPopup(pet:Pet){
    this.petPopupTitle="Edit your pet";
    this.displayPetEditComponent=!this.displayPetEditComponent;
    this.selectedPet=pet;
  }

  toggleImagePetPopup(pet:Pet){
    this.displayShowImagesComponent=!this.displayShowImagesComponent;
    this.selectedPet=pet;
  }

//  MedicalCard///////////
loadMedicalCard(petId: number) {
  this.petService.getMedicalCardOfPet(petId).subscribe((res) => {
    this.medicalCard = res;
    console.log(this.medicalCard);
  });
}

openMedicalCard(petId: number) {
  this.testDisplay = !this.testDisplay;

  if (petId) {
    this.loadMedicalCard(petId);
  }
}

showMedicalCard() {
  this.switchToMedicalCard = true;
  this.displayConclusionPopup = false;
}

  
}
