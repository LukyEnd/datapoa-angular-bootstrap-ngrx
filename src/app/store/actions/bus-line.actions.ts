import { createAction, props } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';

export const loadBusLines = createAction('[BusLine] Buscando dados da API');

export const loadBusLinesSuccess = createAction(
  '[BusLine] Dados da API buscados com sucesso',
  props<{ busLineData: ApiBusLine[] }>()
);

export const loadBusLinesFailure = createAction(
  '[BusLine] Dados da API não buscados',
  props<{ error: string }>()
);
