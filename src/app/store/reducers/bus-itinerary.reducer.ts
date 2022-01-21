import { createReducer, on } from '@ngrx/store';
import * as BusItineraryActions from '../actions/bus-itinerary.actions';
import { ApiBusItinerary } from './../../services/models/bus-itinerary.module';

export const busItineraryFeatureKey = 'busItinerary';

export interface ItineraryState {
  infoBus: ApiBusItinerary[];
  error: string;
}

export const initialState: ItineraryState = {
  infoBus: [],
  error: '',
};

export const Itineraryreducer = createReducer(
  initialState,

  on(
    BusItineraryActions.loadBusItinerarysSuccess,
    (state, action): ItineraryState => {
      return {
        ...state,
        infoBus: action.infoBus,
        error: '',
      };
    }
  ),
  on(
    BusItineraryActions.loadBusItinerarysFailure,
    (state, action): ItineraryState => {
      return {
        ...state,
        infoBus: [],
        error: action.error,
      };
    }
  )
);
