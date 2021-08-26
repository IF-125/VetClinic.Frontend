import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ProceduresService } from '../services/procedures/procedures.service';

@Component({
  selector: 'section-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss'],
})
export class ProceduresComponent implements OnInit {
  public isUserAuthenticated: boolean;
  constructor(private _authService: AuthenticationService, private service: ProceduresService) {}
  Procedures: any = [];

  ngOnInit(): void {
    this.getProcedures();
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    });
  }

  getProcedures() {
    this.service.getProcedureList().subscribe((data) => {
      this.Procedures = data;
    });
  }
}
