import { Component, OnInit } from '@angular/core';
import { ApiItinerary } from 'src/app/models/itinerary.model';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  itinerBus!: ApiItinerary[];
  itinerErro!: string;

  constructor(private serv: ServiceService) {}

  ngOnInit(): void {
    this.itineraryBusLine();
  }

  itineraryBusLine() {
    this.serv.setItinerary().subscribe(
      (data) => {
        // console.log('Valor api', data);
        this.itinerBus = data;
      },
      (erro) => {
        this.itinerErro = erro;
      }
    );
  }
}
