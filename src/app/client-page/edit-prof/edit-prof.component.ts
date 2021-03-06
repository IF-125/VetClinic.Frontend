import { ClientsService } from './../../services/clients/clients.service';
import { Client } from './../../../models/Client';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() closeEvent = new EventEmitter();

  inputClient: Client;

  ngOnInit(): void {

    this.cloneClientToImput();

  }

  submitClicked() {
    this.patchClient()
    this.cloneObjectToShow(this.client, this.inputClient);
    this.closeEvent.next();

  }

  patchClient() {

    let patch = compare(this.client, this.inputClient);

    console.log(patch);

    this.clientService.patchClient(this.clientId, patch).subscribe();

  }

  cloneClientToImput() {
    this.inputClient = JSON.parse(JSON.stringify(this.client));
  }

  cloneObjectToShow(target: any, source: any) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key]
    });
  }

}
