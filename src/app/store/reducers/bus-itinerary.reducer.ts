import { createReducer, on } from '@ngrx/store';
import * as BusItineraryActions from '../actions/bus-itinerary.actions';
import { ApiBusItinerary } from '../../services/models/bus-itinerary.model';
import * as LoadStatus from '../actions/loading.actions';

export const busItineraryFeatureKey = 'busItinerary';

export interface ItineraryState {
  infoBus: ApiBusItinerary[];
  error: string;
  loading: boolean;
}

export const initialState: ItineraryState = {
  infoBus: [],
  error: '',
  loading: true,
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
  ),
  on(LoadStatus.LoderStatusSuccess, (state, action): ItineraryState => {
    return {
      ...state,
      loading: action.status,
    };
  })
);
