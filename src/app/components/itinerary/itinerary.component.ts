import { ApiItinerary } from 'src/app/models/itinerary.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: [
    './itinerary.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class ItineraryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  busLine: ApiItinerary[] = [];
  itinerBus!: Array<any>;
  itinerErro!: string;
  name!: string;
  codigo!: string;

  constructor(
    private serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.itineraryBusLine();
  }

  ngOnInit(): void {}

  itineraryBusLine() {
    const id = this.activatedRoute.snapshot.params.id;
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
        this.itinerErro = erro;
      }
    );
  }
}
