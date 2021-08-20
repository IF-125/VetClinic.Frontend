import { Component, OnInit } from '@angular/core';
import { ProceduresService } from '../services/procedures/procedures.service';

@Component({
  selector: 'section-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss'],
})
export class ProceduresComponent implements OnInit {
  constructor(private procedureService: ProceduresService) {}
  Procedures: any = [];

  ngOnInit(): void {
    this.getProcedures();
  }

  getProcedures() {
    this.procedureService.getProcedureList().subscribe((data) => {
      this.Procedures = data;
    });
  }

  addService(title: string, duration: string, price: string){
    this.procedureService.addProcedure(title);
  }
}
