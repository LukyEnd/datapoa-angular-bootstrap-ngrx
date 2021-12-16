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
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) {}

  public apiBusLine(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}o`);
  }

  public apiMiniBusLines(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${this.urlBus}l`);
  }

  public setItinerary(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlIntinerary}${id}`);
  }
}
