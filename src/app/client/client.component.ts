import { SharedService } from './../shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  public should_open_EditProf = false;
  public should_open_EditPet = false;

  clientId:any;
  client:any;
  
  constructor( private route: ActivatedRoute, private service:SharedService) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId']; 
      console.log(this.clientId);

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

  openEditProfComponent(){
    this.should_open_EditProf = true;
    this.should_open_EditPet = false;
  }
  openEditPetComponent(){
    this.should_open_EditPet = true;
    this.should_open_EditProf = false;
   }

}
