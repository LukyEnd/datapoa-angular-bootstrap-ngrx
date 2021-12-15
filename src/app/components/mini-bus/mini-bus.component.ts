import { ApiBusLine } from './../../models/bus-line.model';
import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: ['./mini-bus.component.scss'],
})
export class MiniBusComponent implements OnInit {
  miniBusLine!: ApiBusLine[];
  miniBusError!: string;

  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    this.miniBusInfo();
  }

  miniBusInfo() {
    this.serv.apiMiniBusLines().subscribe(
      (data) => {
        this.miniBusLine = data;
      },
      (erro) => {
        this.miniBusError = erro;
      }
    );
  }
}
