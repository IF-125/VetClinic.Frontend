import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  public should_open_EditProf = false;
  public should_open_EditPet = false;

  
  constructor() { }

  
  ngOnInit(): void {
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
