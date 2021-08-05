import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  constructor(private service:SharedService) { }
  
   pet:any;
   petList:any=[];

   

  
   @Input() client:any;
   clientId:any="1c4c9910-f036-446e-b6e0-130245586bef";
   

  ngOnInit(): void {
 
  }



  

}
