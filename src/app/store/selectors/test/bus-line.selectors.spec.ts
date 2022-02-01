import * as fromBusLine from '../../reducers/bus-line.reducer';
import {
  getBusLineError,
  getBusLineSuccess,
  getLoader,
  selectBusLineState,
} from '../bus-line.selectors';

describe('BusLine Selectors', () => {
  const initialState: fromBusLine.BusState = {
    busLineData: [],
    error: '',
    loading: true,
  };

  it('should select the feature state', () => {
    const result = selectBusLineState({
      [fromBusLine.busLineFeatureKey]: initialState,
    });

    expect(result).toEqual(result);
  });

  it('should select the feature state Success', () => {
    const result = getBusLineSuccess({
      [fromBusLine.busLineFeatureKey]: initialState,
    });

    expect(result).toEqual(result);
  });

  it('should select the feature state Failure', () => {
    const result = getBusLineError({
      [fromBusLine.busLineFeatureKey]: initialState,
    });

    expect(result).toEqual(result);
  });

  it('should select the feature state Loading', () => {
    const result = getLoader({
      [fromBusLine.busLineFeatureKey]: initialState,
    });

    expect(result).toEqual(result);
  });
});
