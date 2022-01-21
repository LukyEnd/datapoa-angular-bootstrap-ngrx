import { createReducer, on } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';
import * as BusLineActions from '../actions/bus-line.actions';

export const busLineFeatureKey = 'busLine';

export interface BusState {
  busLineData: ApiBusLine[];
  error: string;
  loader: boolean;
}

export const initialState: BusState = {
  busLineData: [],
  error: '',
  loader: false,
};

export const busReducer = createReducer(
  initialState,
  on(BusLineActions.loadBusLinesSuccess, (state, action): BusState => {
    return {
      ...state,
      busLineData: action.busLineData,
      error: '',
    };
  }),
  on(BusLineActions.loadBusLinesFailure, (state, action): BusState => {
    return {
      ...state,
      busLineData: [],
      error: action.error,
    };
  })
);
