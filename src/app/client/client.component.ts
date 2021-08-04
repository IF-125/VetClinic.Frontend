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
  
  constructor( private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId']; 
      console.log(this.clientId);
    });
    
  }

  displayPopup:boolean=false;
  
    togglePopup(){
        this.displayPopup=!this.displayPopup;
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
