import { BusState } from '../reducers/bus-line.reducer';
import { MiniBusState } from '../reducers/mini-bus.reducer';

export interface AppState {
  busLine: BusState;
  miniBus: MiniBusState;
}
