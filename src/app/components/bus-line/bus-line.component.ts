import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { ApiBusLine } from './../../models/bus-line.model';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: ['./bus-line.component.scss'],
})
export class BusLineComponent implements OnInit, OnDestroy {
  busLine!: ApiBusLine[];
  busLineErro!: string;

  isLoading = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.busLineInfo();
    this.tableConfig();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  busLineInfo() {
    this.isLoading = true;
    this.serv.apiBusLine().subscribe(
      (data) => {
        this.busLine = data;
        this.dtTrigger.next();
      },
      (erro) => {
        this.busLineErro = 'Não foi Possivel Consultar';
      },
      () => (this.isLoading = false)
    );
  }

  tableConfig() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
  }
}
