import { createAction, props } from '@ngrx/store';
import { BusLineDetail } from '../../data-poa/models/bus-line.model';

export const loadBusLines = createAction('[BusLine] Load BusLine');

export const loadBusLinesSuccess = createAction(
  '[BusLine] Load BusLine Success',
  props<{ busLineData: BusLineDetail[] }>()
);

export const loadBusLinesFailure = createAction(
  '[BusLine] Load BusLine Failure',
  props<{ error: string }>()
);
