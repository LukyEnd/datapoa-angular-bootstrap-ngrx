import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MapboxGL from 'mapbox-gl';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import {
  getBusItineraryError,
  getBusItinerarySuccess,
  getLoader,
} from 'src/app/store/selectors/bus-itinerary.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import * as BusItinerary from '../../../store/actions/bus-itinerary.actions';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: [
    './itinerary.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class ItineraryComponent implements OnInit, OnDestroy {
  public busItinerary$: Observable<any>;
  public nameItinerary!: string;
  public busItineraryError$: Observable<string>;
  public busItineraryError!: string;
  public isLoading$: Observable<boolean>;

  public busItinerary: { lat: string; lng: string }[] = [];
  public subscription: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.busItinerary$ = this.store.select(getBusItinerarySuccess);
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
    this.store.dispatch(BusItinerary.loadBusItinerarys({ idBus: idBus }));
  }

  public dataItinerary(): void {
    this.subscription.push(
      this.busItinerary$
        .pipe(
          map((data) => {
            for (let key in data) {
              switch (key) {
                case 'idlinha':
                  break;
                case 'nome':
                  this.nameItinerary = data[key];
                  break;
                case 'codigo':
                  break;
                default:
                  this.busItinerary.push(data[key]);
                  break;
              }
            }
          })
        )
        .subscribe(() => {
          let coordinates = this.busItinerary.map(function (item) {
            return [+item.lng, +item.lat];
          });
          this.mapData(coordinates);
          this.busItinerary = [];

          return {
            name: this.nameItinerary,
          };
        })
    );

    this.subscription.push(
      this.busItineraryError$.subscribe((error) => {
        this.busItineraryError = error;
      })
    );
  }

  public mapData(lngLat: Array<any>): void {
    (MapboxGL as any).accessToken = environment.mapTokenKey;
    const maps = new MapboxGL.Map({
      container: 'maps',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: lngLat[0],
      zoom: 16,
      pitch: 50,
      maxPitch: 68,
    });

    maps.on('load', () => {
      maps.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: lngLat,
          },
        },
      });
      maps.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0000FF',
          'line-width': 6,
          'line-opacity': 0.5,
        },
      });
      for (let key in lngLat) {
        new MapboxGL.Marker()
          .setLngLat(lngLat[key])
          .setPopup(
            new MapboxGL.Popup({ offset: 25 }).setHTML(
              `<a  href= "https://www.google.com/maps/?q=${lngLat[
                key
              ].reverse()}"
              target="_blank" class="googleMaps"><h6>Ver no Google Maps</h6></a>`
            )
          )
          .addTo(maps);
      }
    });
  }
}
