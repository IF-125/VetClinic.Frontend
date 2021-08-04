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

  addClick(){
    this.pet={
      PetId:0,
      PetName:""
    }
    this.ModalTitle="Add Pet";
    this.ActivateAddEditPetComp=true;

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

  closeClick(){
    this.ActivateAddEditPetComp=false;
    this.refreshPetList();
  }


  refreshPetList(){
    this.service.getPetListByClientId(this.clientId).subscribe(data=>{
      this.PetList=data;
      this.PetListWithoutFilter=data;
    });
  }

  FilterFn(){
    var PetIdFilter = this.PetIdFilter;
    var PetNameFilter = this.PetNameFilter;

    this.PetList = this.PetListWithoutFilter.filter(function (el){
        return el.PetId.toString().toLowerCase().includes(
          PetIdFilter.toString().trim().toLowerCase()
        )&&
        el.PetName.toString().toLowerCase().includes(
          PetNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.PetList = this.PetListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
