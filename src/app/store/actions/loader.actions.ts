import { createAction, props } from '@ngrx/store';

export const LoderStatus = createAction(
  '[MiniBus] Dados da API buscados com sucesso',
  props<{ status: boolean }>()
);
