import { ItineraryState } from '../reducers/bus-itinerary.reducer';
import { BusState } from '../reducers/bus-line.reducer';
import { ChangeThemeState } from '../reducers/change-theme.reducer';
import { MiniBusState } from '../reducers/mini-bus.reducer';

export interface AppState {
  busLine: BusState;
  miniBus: MiniBusState;
  busItinerary: ItineraryState;
  changeTheme: ChangeThemeState;
}
