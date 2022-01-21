import { createReducer, on } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';
import * as MiniBusActions from '../actions/mini-bus.actions';

export const miniBusFeatureKey = 'miniBus';

export interface MiniBusState {
  miniBusData: ApiBusLine[];
  error: string;
  loader: boolean;
}

export const initialState: MiniBusState = {
  miniBusData: [],
  error: '',
  loader: false,
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
  })
);
