import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ConsultApiService } from '../../services/consult-api.service';
import * as BusLineActions from '../actions/bus-line.actions';
import { LoderStatusSuccess } from '../actions/loading.actions';
import { ErrorBuilder } from '../builder/erro-builder';
import { AppState } from './../state/app.state';

@Injectable()
export class BusLineEffects {
  constructor(
    private serv: ConsultApiService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  loadBusLines$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusLineActions.loadBusLines),
      mergeMap(() =>
        this.serv.apiBusLine('bus').pipe(
          map((busLineData) => {
            this.store.dispatch(LoderStatusSuccess({ status: false }));
            return BusLineActions.loadBusLinesSuccess({
              busLineData: busLineData,
            });
          }),
          catchError((error) => {
            this.store.dispatch(LoderStatusSuccess({ status: true }));
            // if (error) {
            //   switch (error.status) {
            //     case 503:
            //       return of(
            //         BusLineActions.loadBusLinesFailure({
            //           error: ErrorBuilder.genericError(error),
            //         })
            //       );
            //     default:
            //       return of(
            //         BusLineActions.loadBusLinesFailure({
            //           error: ErrorBuilder.genericError(error),
            //         })
            //       );
            //   }
            // }
            // return Observable.throw(error);
            return of(
              BusLineActions.loadBusLinesFailure({
                error: ErrorBuilder.genericError(error),
              })
            );
          })
        )
      )
    );
  });
}
