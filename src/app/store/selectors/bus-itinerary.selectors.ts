import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBusItinerary from '../reducers/bus-itinerary.reducer';

export const selectBusItineraryState =
  createFeatureSelector<fromBusItinerary.ItineraryState>(
    fromBusItinerary.busItineraryFeatureKey
  );

export const getBusItinerarySuccess = createSelector(
  selectBusItineraryState,
  (state) => state.infoBus
);

export const getBusItineraryError = createSelector(
  selectBusItineraryState,
  (state) => state.error
);
