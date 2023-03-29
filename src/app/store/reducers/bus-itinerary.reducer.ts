import { createReducer, on } from '@ngrx/store';
import * as BusItineraryActions from '../actions/bus-itinerary.actions';
import * as LoadStatus from '../actions/loading.actions';
import { Coordinates } from '../../data-poa/models/bus-coordinates';

export const busItineraryFeatureKey = 'busItinerary';

export interface ItineraryState {
  infoBus: Coordinates[];
  nameBus: string;
  error: string;
  loading: boolean;
}

export const initialState: ItineraryState = {
  infoBus: [],
  nameBus: '',
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
        nameBus: '',
        error: '',
      };
    }
  ),
  on(
    BusItineraryActions.loadNameBusItinerarys,
    (state, action): ItineraryState => {
      return {
        ...state,
        infoBus: [],
        nameBus: action.nameBus,
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
        nameBus: '',
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
