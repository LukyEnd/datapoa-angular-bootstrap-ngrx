import { createAction, props } from '@ngrx/store';
import { BusLineDetail } from '../../data-poa/models/bus-line.model';

export const MiniBuss = createAction('[MiniBus] Load MiniBus');

export const MiniBussSuccess = createAction(
  '[MiniBus]Load MiniBus Success',
  props<{ miniBusData: BusLineDetail[] }>()
);

export const MiniBussFailure = createAction(
  '[MiniBus] Load MiniBus Failure',
  props<{ error: string }>()
);
