import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { ApiBusLine } from './../../models/bus-line.model';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: [
    './bus-line.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class BusLineComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  busLine: ApiBusLine[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.busLineInfo();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  busLineInfo() {
    this.serv.apiBusLine().subscribe((data) => {
      this.busLine = data;
      this.dtTrigger.next();
    });
  }

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
    return this.serv.setItinerary(id);
  }
}
