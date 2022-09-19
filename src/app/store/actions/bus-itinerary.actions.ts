import { createAction, props } from '@ngrx/store';
import {BusItinerary} from "../../data-poa/models/bus-itinerary.model";

export const loadBusItinerarys = createAction(
  '[BusItinerary] Load BusItinerarys',
  props<{ idBus: number }>()
);

export const loadBusItinerarysSuccess = createAction(
  '[BusItinerary] Load BusItinerarys Success',
  props<{ infoBus: BusItinerary[] }>()
);

export const loadBusItinerarysFailure = createAction(
  '[BusItinerary] Load BusItinerarys Failure',
  props<{ error: string }>()
);
