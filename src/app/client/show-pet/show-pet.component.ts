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
  pet:any;

  

  ngOnInit(): void {
    this.refreshPetList();
    
  }

  

  editClick(item){
    this.pet=item;
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
      
    
    });
    
    var aType:any=[];
    this.service.getAnimalTypeList().subscribe(data=>{
      aType=data;

      console.log(aType)
    })
      
      
    
  }

  
 

}
