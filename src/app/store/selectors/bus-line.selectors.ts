import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBusLine from '../reducers/bus-line.reducer';

export const selectBusLineState = createFeatureSelector<fromBusLine.BusState>(
  fromBusLine.busLineFeatureKey
);

export const getBusLineSuccess = createSelector(
  selectBusLineState,
  (state) => state.busLineData
);

export const getBusLineError = createSelector(
  selectBusLineState,
  (state) => state.error
);

export const getLoader = createSelector(
  selectBusLineState,
  (state) => state.loading
);
