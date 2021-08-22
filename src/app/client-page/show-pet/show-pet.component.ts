import { Component, Input, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets/pets.service';
import { Client } from 'src/models/Client';
import { Pet } from 'src/models/Pet';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss'],
})
export class ShowPetComponent implements OnInit {
  constructor(private petService: PetsService) {}

  @Input() clientId = '';
  @Input() client: Client;

  PetList: Pet[] = [];
  selectedPet: any;

  petPopupTitle:string;
  displayPetEditComponent:boolean=false;
  

  ngOnInit(): void {
    this.refreshPetList();
    
  }

  toggleEditPetPopup(pet:Pet){
    this.petPopupTitle="Edit your pet";
    this.displayPetEditComponent=!this.displayPetEditComponent;
    this.selectedPet=pet;
    console.log(this.selectedPet)

  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.petService.deletePet(item.PetId).subscribe((data) => {
        alert(data.toString());
        this.refreshPetList();
      });
    }
  }

  refreshPetList() {
    this.petService.getPetListByClientId(this.clientId).subscribe((data) => {
      this.PetList = data;
      
      console.log(this.PetList)
    });
  }
}
