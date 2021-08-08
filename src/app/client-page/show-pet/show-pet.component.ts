import { Component, Input, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets/pets.service';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss'],
})
export class ShowPetComponent implements OnInit {
  constructor(private petService: PetsService) {}

  @Input() clientId = '';

  PetList: any = [];
  pet: any;

  ngOnInit(): void {
    this.refreshPetList();
  }

  editClick(item) {
    this.pet = item;
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
    });
  }
}
