import { Component, OnInit } from '@angular/core';
import { ApiItinerary } from 'src/app/models/itinerary.model';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  itinerBus!: any;
  itinerErro!: string;
  cordenadas!: [];

  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    this.itineraryBusLine();
  }

  itineraryBusLine() {
    this.serv.setItinerary().subscribe(
      (data) => {
        // console.log('Valor api', data);
        this.cordenadas = data.map((x: any) => [x.lat, x.lng]);
        this.itinerBus = data;
        console.log('cordenadas', this.cordenadas);
      },
      (erro) => {
        this.itinerErro = erro;
      }
    );
  }
}
