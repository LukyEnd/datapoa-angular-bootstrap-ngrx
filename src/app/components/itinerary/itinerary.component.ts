import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit, OnDestroy {
  itinerBus!: Array<any>;
  intinerBusError!: string;
  name!: string;
  codigo!: string;

  isLoading = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.itineraryBusLine();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.tableConfig();
  }

  itineraryBusLine() {
    this.isLoading = true;
    const id = this.activatedRoute.snapshot.params.id;
    this.serv.setItinerary(id).subscribe(
      (data) => {
        this.name = data.nome;
        this.codigo = data.codigo;
        delete data.nome;
        delete data.idlinha;
        delete data.codigo;
        this.itinerBus = data;
        this.dtTrigger.next();
      },
      (erro) => {
        this.intinerBusError = 'Não foi Possivel Consultar';
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
}
