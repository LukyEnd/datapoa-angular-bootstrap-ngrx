import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMiniBus from '../reducers/mini-bus.reducer';

export const selectMiniBusState =
  createFeatureSelector<fromMiniBus.MiniBusState>(
    fromMiniBus.miniBusFeatureKey
  );

export const getMiniBusLineSuccess = createSelector(
  selectMiniBusState,
  (state) => state.miniBusList
);

export const getMiniBusLineError = createSelector(
  selectMiniBusState,
  (state) => state.error
);

export const getLoader = createSelector(
  selectMiniBusState,
  (state) => state.loader
);
