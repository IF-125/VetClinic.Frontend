import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss']
})
export class DoctorPageComponent implements OnInit {
  
  constructor() { }

  
  ngOnInit(): void {
  }
  
  title = 'Veterinary clinic';
  
  displayPopup:boolean=false;
  
    togglePopup(){
        this.displayPopup=!this.displayPopup;
    }
}
