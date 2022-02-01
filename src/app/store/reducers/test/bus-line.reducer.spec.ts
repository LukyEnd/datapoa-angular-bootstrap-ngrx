import * as busLineAction from '../../actions/bus-line.actions';
import * as busLineLoading from '../../actions/loading.actions';
import * as busLineReducer from '../../reducers/bus-line.reducer';

describe('BusLine Reducer', () => {
  it('busLineData should have a busLineData', () => {
    const action = busLineAction.loadBusLinesSuccess({ busLineData: [] });
    const state = busLineReducer.busReducer(undefined, action);

    expect(state.busLineData).toEqual([]);
  });

  it('error should be error', () => {
    const action = busLineAction.loadBusLinesFailure({ error: '' });
    const state = busLineReducer.busReducer(undefined, action);

    expect(state.error).toEqual('');
  });

  it('loading should be loading', () => {
    const action = busLineLoading.LoderStatusSuccess({ loading: true });
    const state = busLineReducer.busReducer(undefined, action);

    expect(state.loading).toEqual(true);
  });
});
