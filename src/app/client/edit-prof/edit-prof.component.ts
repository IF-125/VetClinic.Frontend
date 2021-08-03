import { Component, OnInit } from '@angular/core';
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

   

  
   client:any;
   clientId:any="1c4c9910-f036-446e-b6e0-130245586bef";
   

  ngOnInit(): void {
 
  }



  public showClientWithPet(val:string)
  {
    
    this.clientId=val;

    console.log(this.clientId)

    //get Client info
    this.service.getClientById(this.clientId).subscribe(data=>{
      this.client=data;
    })
    

    console.log(this.client);

    //get Pets info
    this.service.getPetList().subscribe(
      data=>{this.petList=data;})
  }

}
