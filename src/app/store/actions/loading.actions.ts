import { createAction, props } from '@ngrx/store';

export const LoderStatus = createAction('[LoderStatus] Load LoderStatus');

export const LoderStatusSuccess = createAction(
  '[LoderStatus] Load LoderStatus Success',
  props<{ loading: boolean }>()
);
