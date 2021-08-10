import { ClientsService } from './../../services/clients/clients.service';
import { Client } from './../../../models/Client';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss'],
})
export class EditProfComponent implements OnInit {
  
  constructor(private clientService:ClientsService) {}

  @Input() client: any;
  @Input()clientId: string;

  // clientTest={"path": "/firstName",
  // "op": "replace",
  // "value": "test5"}

  clientTest={firstName:"test5"}

 

  ngOnInit(): void {
    
  }

  patchClient(){
    let x:any;
    this.clientService.patchClient(this.clientId, this.clientTest).subscribe(data=>
      x=data);
    
    console.log(x);

    //console.log(this.clientId);
    //console.log(this.client);
  }
}
