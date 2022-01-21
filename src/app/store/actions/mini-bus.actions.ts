import { createAction, props } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';

export const MiniBuss = createAction('[MiniBus] Buscando dados da API');

export const MiniBussSuccess = createAction(
  '[MiniBus] Dados da API buscados com sucesso',
  props<{ miniBusData: ApiBusLine[] }>()
);

export const MiniBussFailure = createAction(
  '[MiniBus] Dados da API não buscados',
  props<{ error: string }>()
);
