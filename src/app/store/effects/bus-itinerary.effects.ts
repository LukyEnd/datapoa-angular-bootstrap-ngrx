import { ServiceService } from 'src/app/services/service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BusItineraryActions from '../actions/bus-itinerary.actions';

@Injectable()
export class BusItineraryEffects {
  constructor(private actions$: Actions, private serv: ServiceService) {}

  loadBusItinerarys$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusItineraryActions.loadBusItinerarys),
      mergeMap((data) =>
        this.serv.setItinerary(data.idBus).pipe(
          map((infoBus) => {
            return BusItineraryActions.loadBusItinerarysSuccess({
              infoBus: infoBus,
            });
          })
        )
      )
    );
  });
}
