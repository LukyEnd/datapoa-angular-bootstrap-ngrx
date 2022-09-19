// import * as fromBusItinerary from '../../reducers/bus-itinerary.reducer';
// import {
//   getBusItineraryError,
//   getBusItinerarySuccess,
//   getLoader,
//   selectBusItineraryState,
// } from '../bus-itinerary.selectors';

// describe('BusItinerary Selectors', () => {
//   const ItineraryState: fromBusItinerary.ItineraryState = {
//     infoBus: [],
//     error: '',
//     loading: true,
//   };

//   it('should select the feature state', () => {
//     const result = selectBusItineraryState({
//       [fromBusItinerary.busItineraryFeatureKey]: ItineraryState,
//     });

//     expect(ItineraryState).toBe(result);
//   });

//   it('should select the feature state Success', () => {
//     const result = getBusItinerarySuccess({
//       [fromBusItinerary.busItineraryFeatureKey]: ItineraryState,
//     });

//     expect(ItineraryState).toBe(result as any);
//   });

//   it('should select the feature state Failure', () => {
//     const result = getBusItineraryError({
//       [fromBusItinerary.busItineraryFeatureKey]: ItineraryState,
//     });

//     expect(ItineraryState).toBe(result as any);
//   });

//   it('should select the feature state Loading', () => {
//     const result = getLoader({
//       [fromBusItinerary.busItineraryFeatureKey]: ItineraryState,
//     });

//     expect(ItineraryState).toBe(result as any);
//   });
// });
