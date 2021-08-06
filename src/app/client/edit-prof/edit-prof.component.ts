import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  constructor(private service:SharedService) { }
  
    

   
   @Input() client:any;
   
   

  ngOnInit(): void {
 
  }



  

}
