import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';
import { LoderStatus } from '../actions/loader.actions';
import * as MiniBusLineActions from '../actions/mini-bus.actions';
import { AppState } from './../state/app.state';

@Injectable()
export class MiniBusEffects {
  constructor(
    private serv: ServiceService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  MiniBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MiniBusLineActions.MiniBuss),
      mergeMap(() =>
        this.serv.apiBusLine('miniBus').pipe(
          map((miniBusData) => {
            this.store.dispatch(LoderStatus({ status: false }));
            return MiniBusLineActions.MiniBussSuccess({ miniBusData });
          })
        )
      )
    );
  });
}
