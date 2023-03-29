import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import {
  getBusItineraryError,
  getBusItinerarySuccess,
  getBusNameItinerary,
  getLoader,
} from 'src/app/store/selectors/bus-itinerary.selectors';
import { AppState } from 'src/app/store/state/app.state';
import * as BusItineraryActions from '../../../store/actions/bus-itinerary.actions';
import { MapConfig } from '../shared/map-config';
import { Coordinates } from '../../models/bus-coordinates';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: [
    './itinerary.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class ItineraryComponent extends MapConfig implements OnInit, OnDestroy {
  public transportItinerary$: Observable<Coordinates[]>;
  public transportItinerary: Coordinates[] = [];
  public nameItinerary$: Observable<string>;
  public nameItinerary!: string;
  public busItineraryError$: Observable<string>;
  public busItineraryError!: string;
  public isLoading$: Observable<boolean>;

  public subscription: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    super();
    this.transportItinerary$ = this.store.select(getBusItinerarySuccess);
    this.nameItinerary$ = this.store.select(getBusNameItinerary);
    this.busItineraryError$ = this.store.select(getBusItineraryError);
    this.isLoading$ = this.store.select(getLoader);
  }

  public ngOnInit(): void {
    this.actionsPageInitial();
    this.dataItinerary();
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public actionsPageInitial(): void {
    const idBus = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(LoderStatus());
    this.store.dispatch(
      BusItineraryActions.loadBusItinerarys({ idBus: idBus })
    );
  }

  public dataItinerary(): void {
    this.subscription.push(
      this.nameItinerary$.subscribe((nameItinerary) => {
        if (nameItinerary !== '') {
          this.nameItinerary = nameItinerary;
        }
      })
    );

    this.subscription.push(
      this.transportItinerary$.subscribe((data) => {
        this.transportItinerary = data;
        let coordinates = this.transportItinerary.map((item) => {
          return [+item.lng, +item.lat];
        });
        this.mapData(coordinates);
        this.transportItinerary = [];
      })
    );

    this.subscription.push(
      this.busItineraryError$.subscribe((error) => {
        this.busItineraryError = error;
      })
    );
  }
}
