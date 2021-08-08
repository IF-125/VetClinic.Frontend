import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss'],
})
export class EditProfComponent implements OnInit {
  constructor() {}

  @Input() client: any;

  ngOnInit(): void {}
}
