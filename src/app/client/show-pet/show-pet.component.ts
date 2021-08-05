import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss']
})
export class ShowPetComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() clientId='';

  PetList:any=[];

  ModalTitle:string;
  ActivateAddEditPetComp:boolean=false;
  pet:any;

  PetIdFilter:string="";
  PetNameFilter:string="";
  PetListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshPetList();
  }

  

  editClick(item){
    this.pet=item;
    this.ModalTitle="Edit Pet";
    this.ActivateAddEditPetComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deletePet(item.PetId).subscribe(data=>{
        alert(data.toString());
        this.refreshPetList();
      })
    }
  }



  refreshPetList(){
    this.service.getPetListByClientId(this.clientId).subscribe(data=>{
      this.PetList=data;
      this.PetListWithoutFilter=data;
    });
  }

  
 

}
