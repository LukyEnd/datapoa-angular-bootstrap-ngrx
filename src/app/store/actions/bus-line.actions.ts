import { createAction, props } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';

export const loadBusLines = createAction('[BusLine] Load BusLine');

export const loadBusLinesSuccess = createAction(
  '[BusLine] Load BusLine Success',
  props<{ busLineData: ApiBusLine[] }>()
);

export const loadBusLinesFailure = createAction(
  '[BusLine] Load BusLine Failure',
  props<{ error: string }>()
);
