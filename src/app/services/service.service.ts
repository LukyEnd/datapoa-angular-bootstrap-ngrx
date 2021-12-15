import { ApiItinerary } from '../models/itinerary.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBusLine } from '../models/bus-line.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  urlBus: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';
  urlIntinerary: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=5200';

  constructor(private http: HttpClient) {}

  apiBusLine(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}o`);
  }

  apiMiniBusLines(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}l`);
  }

  apiItinerary(): Observable<ApiItinerary> {
    return this.http.get<ApiItinerary>(`${this.urlIntinerary}`);
  }
}
