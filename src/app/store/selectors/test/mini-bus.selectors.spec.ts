import * as fromMiniBus from '../../reducers/mini-bus.reducer';
import { selectMiniBusState } from '../mini-bus.selectors';

describe('MiniBus Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMiniBusState({
      [fromMiniBus.miniBusFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
