import { createAction, props } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';

export const MiniBuss = createAction('[MiniBus] Load MiniBus');

export const MiniBussSuccess = createAction(
  '[MiniBus]Load MiniBus Success',
  props<{ miniBusData: ApiBusLine[] }>()
);

export const MiniBussFailure = createAction(
  '[MiniBus] Load MiniBus Failure',
  props<{ error: string }>()
);
