import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: [
    './itinerary.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class ItineraryComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  itinerBus!: Array<any>;
  intinerBusError!: string;
  isLoading = false;
  name!: string;
  codigo!: string;

  // dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.itineraryBusLine();
  }
  ngOnDestroy(): void {
    // this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
    this.itineraryBusLine();
  }

  itineraryBusLine() {
    const id = this.activatedRoute.snapshot.params.id;
    this.isLoading = true;
    this.serv.setItinerary(id).subscribe(
      (data) => {
        this.name = data.nome;
        this.codigo = data.codigo;
        delete data.nome;
        delete data.idlinha;
        delete data.codigo;
        this.itinerBus = data;
      },
      (erro) => {
        this.intinerBusError = 'Não foi Possivel Consultar';
      },
      () => (this.isLoading = false)
    );
  }
}
