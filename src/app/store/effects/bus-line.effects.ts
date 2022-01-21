import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceService } from '../../services/service.service';
import * as BusLineActions from '../actions/bus-line.actions';
import { LoderStatus } from '../actions/loader.actions';
import { AppState } from './../state/app.state';

@Injectable()
export class BusLineEffects {
  constructor(
    private serv: ServiceService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  loadBusLines$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BusLineActions.loadBusLines),
      mergeMap(() =>
        this.serv.apiBusLine().pipe(
          map((busLineData) => {
            this.store.dispatch(LoderStatus({ status: false }));
            return BusLineActions.loadBusLinesSuccess({
              busLineData: busLineData,
            });
          })
        )
      )
    );
  });
}
