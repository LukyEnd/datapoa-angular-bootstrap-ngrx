import * as fromBusLine from '../../reducers/bus-line.reducer';
import { selectBusLineState } from '../bus-line.selectors';

describe('BusLine Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBusLineState({
      [fromBusLine.busLineFeatureKey]: {},
    });

    // expect(result).toEqual({});
  });
});
