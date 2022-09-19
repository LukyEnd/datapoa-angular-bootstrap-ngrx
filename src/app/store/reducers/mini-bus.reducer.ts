import {createReducer, on} from '@ngrx/store';
import {BusLineDetail} from '../../data-poa/models/bus-line.model';
import * as LoadStatus from '../actions/loading.actions';
import * as MiniBusActions from '../actions/mini-bus.actions';

export const miniBusFeatureKey = 'miniBus';

export interface MiniBusState {
  miniBusData: BusLineDetail[];
  error: string;
  loading: boolean;
}

export const initialState: MiniBusState = {
  miniBusData: [],
  error: '',
  loading: true,
};

export const miniBusReducer = createReducer(
  initialState,
  on(MiniBusActions.MiniBussSuccess, (state, action): MiniBusState => {
    return {
      ...state,
      miniBusData: action.miniBusData,
      error: '',
    };
  }),
  on(MiniBusActions.MiniBussFailure, (state, action): MiniBusState => {
    return {
      ...state,
      miniBusData: [],
      error: action.error,
    };
  }),
  on(LoadStatus.LoderStatusSuccess, (state, action): MiniBusState => {
    return {
      ...state,
      loading: action.loading,
    };
  })
);
