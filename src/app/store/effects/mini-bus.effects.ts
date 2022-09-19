import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ConsultApiService } from 'src/app/data-poa/services/consult-api.service';
import { LoderStatusSuccess } from '../actions/loading.actions';
import * as MiniBusLineActions from '../actions/mini-bus.actions';
import { ErrorBuilder } from '../../data-poa/builders/error-builder';
import { AppState } from '../state/app.state';

@Injectable()
export class MiniBusEffects {
  constructor(
    private serv: ConsultApiService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  MiniBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MiniBusLineActions.MiniBuss),
      mergeMap(() =>
        this.serv.apiBusLine('miniBus').pipe(
          map((miniBusData) => {
            this.store.dispatch(LoderStatusSuccess({ loading: false }));
            return MiniBusLineActions.MiniBussSuccess({ miniBusData });
          })
        )
      ),
      catchError((error) => {
        this.store.dispatch(LoderStatusSuccess({ loading: false }));
        // if (error) {
        //   switch (error.loading) {
        //     case 503:
        //       return of(
        //         MiniBusLineActions.MiniBussFailure({
        //           error: ErrorBuilder.genericError(null),
        //         })
        //       );
        //     default:
        //       return of(
        //         MiniBusLineActions.MiniBussFailure({
        //           error: ErrorBuilder.genericError(error),
        //         })
        //       );
        //   }
        // }
        // return Observable.throw(error);
        return of(
          MiniBusLineActions.MiniBussFailure({
            error: ErrorBuilder.genericError(error),
          })
        );
      })
    );
  });
}
