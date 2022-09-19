import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMiniBus from '../reducers/mini-bus.reducer';

export const selectMiniBusState =
  createFeatureSelector<fromMiniBus.MiniBusState>(
    fromMiniBus.miniBusFeatureKey
  );

export const getMiniBusSuccess = createSelector(
  selectMiniBusState,
  (state) => state.miniBusData
);

export const getMiniBusError = createSelector(
  selectMiniBusState,
  (state) => state.error
);

export const getLoader = createSelector(
  selectMiniBusState,
  (state) => state.loading
);
