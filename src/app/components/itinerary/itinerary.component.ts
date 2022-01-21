import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import {
  getBusItineraryError,
  getBusItinerarySuccess,
} from 'src/app/store/selectors/bus-itinerary.selectors';
import * as BusItinerary from '../../store/actions/bus-itinerary.actions';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit, OnDestroy {
  name!: string;
  // codigo!: string;

  busItinerary$!: Observable<any>;
  busItinerary!: Array<any>;

  busItineraryErro$!: Observable<string>;
  busItineraryErro!: string;

  isLoading$!: Observable<boolean>;
  isLoading: boolean = false;

  subscription: Subscription[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.busItinerary$ = this.store.select(getBusItinerarySuccess);
    this.busItineraryErro$ = this.store.select(getBusItineraryError);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.busItineraryPage();
    this.dataItineraryBus();
    this.tableConfig();
  }

  busItineraryPage() {
    const idBus = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(BusItinerary.loadBusItinerarys({ idBus: idBus }));
  }

  dataItineraryBus() {
    this.subscription.push(
      this.busItinerary$.subscribe((data) => {
        this.name = data.nome;
        // this.codigo = data.codigo;
        // delete data.nome;
        // delete data.idlinha;
        // delete data.codigo;
        this.busItinerary = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.busItineraryErro$.subscribe((erro) => {
        this.busItineraryErro = erro;
        this.dtTrigger.next();
      })
    );
  }

  tableConfig() {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }
}
