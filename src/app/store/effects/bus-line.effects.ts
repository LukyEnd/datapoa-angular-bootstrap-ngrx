import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as BusLineActions from '../actions/bus-line.actions';
import { ServiceService } from '../../services/service.service';
import { Store } from '@ngrx/store';
import { LoderStatus } from '../actions/loader.actions';

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
          map((busLineList) => {
            this.store.dispatch(LoderStatus({ status: false }));
            return BusLineActions.loadBusLinesSuccess({ busLineList });
          })
        )
      )
    );
  });
}
