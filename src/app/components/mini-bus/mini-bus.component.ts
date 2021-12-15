import { ApiBusLine } from './../../models/bus-line.model';
import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: [
    './mini-bus.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class MiniBusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  miniBusLine: ApiBusLine[] = [];
  miniBusError!: string;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
    };
    this.miniBusInfo();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  miniBusInfo() {
    this.serv.apiMiniBusLines().subscribe((data) => {
      this.miniBusLine = data;
      this.dtTrigger.next();
    });
  }

  setNumberId(id: number) {
    return this.serv.apiItinerary(id);
  }
}
