import * as fromMiniBus from '../../reducers/mini-bus.reducer';
import {
  getLoader,
  getMiniBusError,
  getMiniBusSuccess,
  selectMiniBusState,
} from '../mini-bus.selectors';

describe('MiniBus Selectors', () => {
  const MiniBusState: fromMiniBus.MiniBusState = {
    miniBusData: [],
    error: '',
    loading: true,
  };

  it('should select the feature state', () => {
    const result = selectMiniBusState({
      [fromMiniBus.miniBusFeatureKey]: MiniBusState,
    });

    expect(MiniBusState).toEqual(result);
  });

  it('should select the feature state Success', () => {
    const result = getMiniBusSuccess({
      [fromMiniBus.miniBusFeatureKey]: MiniBusState,
    });

    expect(MiniBusState).toEqual(result as any);
  });

  it('should select the feature state Failure', () => {
    const result = getMiniBusError({
      [fromMiniBus.miniBusFeatureKey]: MiniBusState,
    });

    expect(MiniBusState).toEqual(result as any);
  });

  it('should select the feature state Loading', () => {
    const result = getLoader({
      [fromMiniBus.miniBusFeatureKey]: MiniBusState,
    });

    expect(MiniBusState).toEqual(result as any);
  });
});
