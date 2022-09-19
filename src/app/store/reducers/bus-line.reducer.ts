import {createReducer, on} from '@ngrx/store';
import {BusLineDetail} from 'src/app/data-poa/models/bus-line.model';
import * as BusLineActions from '../actions/bus-line.actions';
import * as LoadStatus from '../actions/loading.actions';

export const busLineFeatureKey = 'busLine';

export interface BusState {
  busLineData: BusLineDetail[];
  error: string;
  loading: boolean;
}

export const initialState: BusState = {
  busLineData: [],
  error: '',
  loading: true,
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
  }),
  on(LoadStatus.LoderStatusSuccess, (state, action): BusState => {
    return {
      ...state,
      loading: action.loading,
    };
  })
);
