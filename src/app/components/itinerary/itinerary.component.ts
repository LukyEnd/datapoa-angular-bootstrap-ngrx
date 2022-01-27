import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Mapboxgl from 'mapbox-gl';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  getBusItineraryError,
  getBusItinerarySuccess,
} from 'src/app/store/selectors/bus-itinerary.selectors';
import { environment } from 'src/environments/environment';
import * as BusItinerary from '../../store/actions/bus-itinerary.actions';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit, OnDestroy {
  name!: string;

  busItinerary$!: Observable<any>;
  busItinerary: { lat: string; lng: string }[] = [];

  busItineraryErro$!: Observable<string>;
  busItineraryErro!: string;

  isLoading$!: Observable<boolean>;
  isLoading: boolean = false;

  subscription: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.busItinerary$ = this.store.select(getBusItinerarySuccess);
    this.busItineraryErro$ = this.store.select(getBusItineraryError);
  }

  ngOnInit(): void {
    this.busItineraryPage();
    this.dataItineraryBus();
  }
  ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  busItineraryPage() {
    const idBus = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(BusItinerary.loadBusItinerarys({ idBus: idBus }));
  }

  dataItineraryBus() {
    this.subscription.push(
      this.busItinerary$
        .pipe(
          map((data) => {
            for (let key in data) {
              switch (key) {
                case 'idlinha':
                  break;
                case 'nome':
                  this.name = data[key];
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
            let lngLat = [+item.lng, +item.lat];
            return lngLat;
          });
          this.mapData(coordinates);
          this.busItinerary = [];

          return {
            name: this.name,
          };
        })
    );

    this.subscription.push(
      this.busItineraryErro$.subscribe((erro) => {
        this.busItineraryErro = erro;
      })
    );
  }

  mapData(lngLat: Array<any>) {
    (Mapboxgl as any).accessToken = environment.mapTokenKey;
    const maps = new Mapboxgl.Map({
      container: 'maps',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: lngLat[0], // lng, lat
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
        new Mapboxgl.Marker()
          .setLngLat(lngLat[key])
          .setPopup(
            new Mapboxgl.Popup({ offset: 25 }).setHTML(
              `<a  href= "https://www.google.com/maps/?q=${lngLat[
                key
              ].reverse()}" 
              target="_blank" class="text-white bg-dark"><h6>Ver no Google Maps</h6></a>` // lat, lng
            )
          )
          .addTo(maps);
      }
    });
  }
}
