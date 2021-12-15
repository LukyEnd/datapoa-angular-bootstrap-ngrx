import { ApiBusLine } from './../../models/bus-line.model';
import { ServiceService } from '../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: ['./bus-line.component.scss'],
})
export class BusLineComponent implements OnInit {
  busLine!: ApiBusLine[];
  busError!: string;

  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    this.busLineInfo();
  }

  busLineInfo() {
    this.serv.apiBusLine().subscribe(
      (data) => {
        this.busLine = data;
        console.log('valor data', data);
      },
      (erro) => {
        this.busError = erro;
      }
    );
  }
}
