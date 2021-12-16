import { ApiBusLine } from './../../models/bus-line.model';
import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
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
    this.router.navigate(['/itinerary', id]);
    return this.serv.setItinerary(id);
  }
}
