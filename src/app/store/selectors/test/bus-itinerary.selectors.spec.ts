import * as fromBusItinerary from '../../reducers/bus-itinerary.reducer';
import { selectBusItineraryState } from '../bus-itinerary.selectors';

describe('BusItinerary Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBusItineraryState({
      [fromBusItinerary.busItineraryFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
