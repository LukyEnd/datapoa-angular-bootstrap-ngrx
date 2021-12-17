import { createReducer, on } from '@ngrx/store';
import { ApiBusLine } from 'src/app/services/models/bus-line.model';
import * as MiniBusActions from '../actions/mini-bus.actions';

export const miniBusFeatureKey = 'miniBus';

export interface MiniBusState {
  miniBusList: ApiBusLine[];
  error: string;
  loader: boolean;
}

export const initialState: MiniBusState = {
  miniBusList: [],
  error: '',
  loader: false,
};

export const miniBusReducer = createReducer(
  initialState,
  on(MiniBusActions.MiniBussSuccess, (state, action): MiniBusState => {
    return {
      ...state,
      error: '',
      miniBusList: action.miniBusList,
    };
  }),
  on(MiniBusActions.MiniBussFailure, (state, action): MiniBusState => {
    return {
      ...state,
      error: action.error,
      miniBusList: [],
    };
  })
);
