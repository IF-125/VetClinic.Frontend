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
  client: any;
  displayProfileComponent: boolean = false;
  displayPetComponent: boolean = false;

  constructor(private route: ActivatedRoute,
     private clientService: ClientsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.clientId = params['clientId'];

      this.clientService.getClientById(this.clientId).subscribe((data) => {
        this.client = data;
      });
    });
  }

  toggleProfilePopup() {
    this.displayProfileComponent = !this.displayProfileComponent;
  }

  toggleAddPetPopup() {
    this.displayPetComponent = !this.displayPetComponent;
  }
}
