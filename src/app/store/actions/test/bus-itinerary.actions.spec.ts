import * as fromBusItinerary from '../bus-itinerary.actions';

describe('loadBusItinerarys', () => {
  it('should return an action', () => {
    expect(fromBusItinerary.loadBusItinerarys().type).toBe(
      '[BusItinerary] Load BusItinerarys'
    );
  });
});
