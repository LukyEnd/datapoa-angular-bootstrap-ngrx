// import * as miniBusLoading from '../../actions/loading.actions';
// import * as miniBusAction from '../../actions/mini-bus.actions';
// import * as miniBusReducer from '../../reducers/mini-bus.reducer';

// describe('MiniBus Reducer', () => {
//   it('miniBusData should have a miniBusData', () => {
//     const action = miniBusAction.MiniBussSuccess({ miniBusData: [] });
//     const state = miniBusReducer.miniBusReducer(undefined, action);

//     expect(state.miniBusData).toBe([]);
//   });

//   it('error should be error', () => {
//     const action = miniBusAction.MiniBussFailure({ error: '' });
//     const state = miniBusReducer.miniBusReducer(undefined, action);

//     expect(state.error).toBe('');
//   });

//   it('loading should be loading', () => {
//     const action = miniBusLoading.LoderStatusSuccess({ loading: true });
//     const state = miniBusReducer.miniBusReducer(undefined, action);

//     expect(state.loading).toBe(true);
//   });
// });
