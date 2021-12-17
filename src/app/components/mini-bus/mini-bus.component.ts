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
  miniBusLine!: ApiBusLine[];
  miniBusErro!: string;
  isLoading = false;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
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

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
  }
}
