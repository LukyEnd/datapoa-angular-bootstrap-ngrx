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

  maps!: Mapboxgl.Map;
  arrayTestes: any = [];
  teste!: any;

  isLoading$!: Observable<boolean>;
  isLoading: boolean = false;

  subscription: Subscription[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.busItinerary$ = this.store.select(getBusItinerarySuccess);
    this.busItineraryErro$ = this.store.select(getBusItineraryError);
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.busItineraryPage();
    this.dataItineraryBus();
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
          let lat = this.busItinerary.map(function (item, indice) {
            let numlat = +item.lat;
            return numlat;
          });
          let lng = this.busItinerary.map(function (item, indice) {
            let numlng = +item.lng;
            return numlng;
          });
          this.vamove(lng, lat).then((x: any | null | undefined) => {
            if (x.length != 0) {
              let coordinates = this.busItinerary.map(function (item, indice) {
                let numlat = [+item.lng, +item.lat];
                return numlat;
              });
              this.mapData(coordinates, lng, lat);
            }
          });

          return {
            name: this.name,
            busItinerary: this.busItinerary,
          };
        })
    );

    this.subscription.push(
      this.busItineraryErro$.subscribe((erro) => {
        this.busItineraryErro = erro;
      })
    );
  }

  vamove(lng: any, lat: any): any {
    var promise = new Promise((resolve, reject) => {
      let coordinates = new Array(lng.length);
      for (let i = 0; i < lng.length; i++) {
        coordinates[i] = new Array(lng.length);
        for (i = 0; i < lng.length; i++) {
          coordinates[i] = +lng[i] + ',' + lat[i];
        }
      }
      resolve(coordinates);
    });
    return promise;
  }

  mapData(lngLat: any, lng: any, lat: any) {
    (Mapboxgl as any).accessToken = environment.mapTokenKey;
    const cordCenter = new Mapboxgl.LngLat(lng[0], lat[0]);
    const maps = new Mapboxgl.Map({
      container: 'maps',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [cordCenter.lng, cordCenter.lat], // lng, lat
      zoom: 15,
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
        },
      });
    });
  }
}
