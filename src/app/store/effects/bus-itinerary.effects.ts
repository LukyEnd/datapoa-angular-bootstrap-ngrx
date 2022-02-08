import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ConsultApiService } from 'src/app/services/consult-api.service';
import * as BusItineraryActions from '../actions/bus-itinerary.actions';
import { LoderStatusSuccess } from '../actions/loading.actions';
import { ErrorBuilder } from '../builder/erro-builder';
import { AppState } from '../state/app.state';

@Injectable()
export class BusItineraryEffects {
  constructor(
    private actions$: Actions,
    private serv: ConsultApiService,
    private store: Store<AppState>
  ) {}

  loadBusItinerarys$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusItineraryActions.loadBusItinerarys),
      mergeMap((data) =>
        this.serv.setItinerary(data.idBus).pipe(
          map((infoBus) => {
            this.store.dispatch(LoderStatusSuccess({ loading: false }));
            return BusItineraryActions.loadBusItinerarysSuccess({
              infoBus: infoBus,
            });
          }),
          catchError((error) => {
            this.store.dispatch(LoderStatusSuccess({ loading: false }));
            return of(
              BusItineraryActions.loadBusItinerarysFailure({
                error: ErrorBuilder.genericError(error),
              })
            );
          })
        )
      )
    );
  });
}
