import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromItinerary from './bus-itinerary.reducer';
import * as fromBus from './bus-line.reducer';
import * as fromMiniBus from './mini-bus.reducer';
import * as fromChangeTheme from './change-theme.reducer';

export const reducers: ActionReducerMap<AppState> = {
  [fromBus.busLineFeatureKey]: fromBus.busReducer,
  [fromMiniBus.miniBusFeatureKey]: fromMiniBus.miniBusReducer,
  [fromItinerary.busItineraryFeatureKey]: fromItinerary.itineraryReducer,
  [fromChangeTheme.changeThemeFeatureKey]:
    fromChangeTheme.changeThemeStateReducer,
};
