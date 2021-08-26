import { Client } from 'src/models/Client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../services/clients/clients.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
 
  clientId: any;
  client: Client;
  displayProfileComponent: boolean = false;
  displayPetAddComponent: boolean = false;

  petPopupTitle:string;

  
  constructor(private route: ActivatedRoute,
     private clientService: ClientsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.clientId = params['clientId'];
      });
    this.getClient();
  }

  toggleProfilePopup() {
    this.displayProfileComponent = !this.displayProfileComponent;
  }

  toggleAddPetPopup() {
    this.displayPetAddComponent = !this.displayPetAddComponent;
    this.petPopupTitle="Add your pet";
  }

  getClient(){
    this.clientService.getClientById(this.clientId).subscribe((data) => {
      this.client = data;
      this.client.id=this.clientId;
    });

  }
  
}
