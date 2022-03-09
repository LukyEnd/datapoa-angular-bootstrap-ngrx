import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BusItinerary } from './models/bus-itinerary.model';
import { BusLineDetail } from './models/bus-line.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultApiService {
  constructor(private http: HttpClient) {}

  public apiBusLine(model: string): Observable<BusLineDetail[]> {
    if (model == 'bus') {
      return this.http.get<BusLineDetail[]>(`${environment.urlBus}o`);
    } else {
      return this.http.get<BusLineDetail[]>(`${environment.urlBus}l`);
    }
  }

  public setItinerary(id: number): Observable<BusItinerary[]> {
    return this.http.get<BusItinerary[]>(`${environment.urlItinerary}${id}`);
  }
}
