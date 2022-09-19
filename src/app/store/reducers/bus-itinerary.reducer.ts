import { createReducer, on } from '@ngrx/store';
import { BusItinerary } from '../../data-poa/models/bus-itinerary.model';
import * as BusItineraryActions from '../actions/bus-itinerary.actions';
import * as LoadStatus from '../actions/loading.actions';

export const busItineraryFeatureKey = 'busItinerary';

export interface ItineraryState {
  infoBus: BusItinerary[];
  error: string;
  loading: boolean;
}

export const initialState: ItineraryState = {
  infoBus: [],
  error: '',
  loading: true,
};

export const itineraryReducer = createReducer(
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
  ),
  on(LoadStatus.LoderStatusSuccess, (state, action): ItineraryState => {
    return {
      ...state,
      loading: action.loading,
    };
  })
);
