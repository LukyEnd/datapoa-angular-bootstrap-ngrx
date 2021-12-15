import { ApiItinerary } from '../models/itinerary.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBusLine } from '../models/bus-line.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  id!: number;
  urlBus: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';
  urlIntinerary: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) {}

  apiBusLine(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}o`);
  }

  apiMiniBusLines(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}l`);
  }

  apiItinerary(id: number) {
    return (this.id = id);
  }

  setItinerary(): Observable<ApiItinerary[]> {
    // console.log('Ultimo Id', this.id);
    return this.http.get<ApiItinerary[]>(`${this.urlIntinerary}${this.id}`);
  }
}
