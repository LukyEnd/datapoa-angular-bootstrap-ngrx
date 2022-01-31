import { ApiBusItinerary } from '../../services/models/bus-itinerary.model';
import { createAction, props } from '@ngrx/store';

export const loadBusItinerarys = createAction(
  '[BusItinerary] Load BusItinerarys',
  props<{ idBus: number }>()
);

export const loadBusItinerarysSuccess = createAction(
  '[BusItinerary] Load BusItinerarys Success',
  props<{ infoBus: ApiBusItinerary[] }>()
);

export const loadBusItinerarysFailure = createAction(
  '[BusItinerary] Load BusItinerarys Failure',
  props<{ error: string }>()
);
