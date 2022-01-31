import { createAction, props } from '@ngrx/store';

export const LoderStatus = createAction('[LoderStatus] Carregamento da Pagina');

export const LoderStatusSuccess = createAction(
  '[MiniBus] Resultado da Pagina Carregada',
  props<{ status: boolean }>()
);
