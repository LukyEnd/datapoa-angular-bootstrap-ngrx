// import * as itineraryAction from '../../actions/bus-itinerary.actions';
// import * as itineraryLoading from '../../actions/loading.actions';
// import * as itineraryReducer from '../../reducers/bus-itinerary.reducer';

// describe('BusItinerary Reducer', () => {
//   it('infoBus should have a infoBus', () => {
//     const action = itineraryAction.loadBusItinerarysSuccess({ infoBus: [] });
//     const state = itineraryReducer.itineraryReducer(undefined, action);

//     expect(state.infoBus).toEqual([]);
//   });

//   it('error should be error', () => {
//     const action = itineraryAction.loadBusItinerarysFailure({
//       error: '',
//     });
//     const state = itineraryReducer.itineraryReducer(undefined, action);

//     expect(state.error).toEqual('');
//   });

//   it('loading should be loading', () => {
//     const action = itineraryLoading.LoderStatusSuccess({ loading: true });
//     const state = itineraryReducer.itineraryReducer(undefined, action);

//     expect(state.loading).toEqual(true);
//   });
// });
