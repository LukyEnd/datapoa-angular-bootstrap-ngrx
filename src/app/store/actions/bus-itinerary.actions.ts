import { createAction, props } from '@ngrx/store';
import { Coordinates } from '../../data-poa/models/bus-coordinates';

export const loadBusItinerarys = createAction(
  '[BusItinerary] Load BusItinerarys',
  props<{ idBus: number }>()
);

export const loadBusItinerarysSuccess = createAction(
  '[BusItinerary] Load BusItinerarys Success',
  props<{ infoBus: Coordinates[] }>()
);

export const loadNameBusItinerarys = createAction(
  '[BusItinerary] Load Name Bus Itinerarys Success',
  props<{ nameBus: string }>()
);

export const loadBusItinerarysFailure = createAction(
  '[BusItinerary] Load BusItinerarys Failure',
  props<{ error: string }>()
);
