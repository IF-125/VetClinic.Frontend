import { ClientsService } from './../../services/clients/clients.service';
import { Client } from './../../../models/Client';
import { Component, Input, OnInit } from '@angular/core';
import { compare } from 'fast-json-patch';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss'],
})
export class EditProfComponent implements OnInit {

  constructor(private clientService: ClientsService) { }

  @Input() client: Client;
  @Input() clientId: string;

  inputClient: Client;

  ngOnInit(): void {

    this.cloneClientToImput();

  }

  patchClient() {

    let patch = compare(this.client, this.inputClient);

    console.log(patch);

    this.clientService.patchClient(this.clientId, patch).subscribe();

    this.cloneObject(this.client, this.inputClient);

  }

  cloneClientToImput() {
    this.inputClient = JSON.parse(JSON.stringify(this.client));
  }

  cloneObject(target: any, source: any) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key]
    });
  }

}
