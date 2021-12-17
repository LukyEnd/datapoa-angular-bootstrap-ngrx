import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { ApiBusLine } from './../../models/bus-line.model';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: ['./mini-bus.component.scss'],
})
export class MiniBusComponent implements OnInit {
  miniBusLine!: ApiBusLine[];
  miniBusErro!: string;

  isLoading = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.tableConfig();
    this.miniBusInfo();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  miniBusInfo() {
    this.isLoading = true;
    this.serv.apiMiniBusLines().subscribe(
      (data) => {
        this.miniBusLine = data;
        this.dtTrigger.next();
      },
      (erro) => {
        this.miniBusErro = 'Não foi Possivel Consultar';
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
