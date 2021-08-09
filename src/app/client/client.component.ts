import { Client } from './../../models/Client';
import { SharedService } from './../shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/models/Pet';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {


  clientId:any;
  client:Client;
  
  
  constructor( private route: ActivatedRoute, private service:SharedService) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId']; 
      

      this.service.getClientById(this.clientId).subscribe(data=>{
        this.client=data;
        
      })
    });
    
  }

  displayProfileComponent:boolean=false;
  displayPetComponent:boolean=false;
  
  toggleProfilePopup(){
      this.displayProfileComponent=!this.displayProfileComponent;
  }

  toggleAddPetPopup(){
    this.displayPetComponent=!this.displayPetComponent;
}

  

}
