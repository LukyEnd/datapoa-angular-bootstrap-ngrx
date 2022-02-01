import * as fromBusItinerary from '../bus-itinerary.actions';

describe('loadBusItinerarys', () => {
  // it('should return an action', () => {
  //   expect(fromBusItinerary.loadBusItinerarys().type).toBe(
  //     '[BusItinerary] Load BusItinerarys'
  //   );
  // });

  it('should return an action Success', () => {
    expect(
      fromBusItinerary.loadBusItinerarysSuccess({ infoBus: [] }).type
    ).toBe('[BusItinerary] Load BusItinerarys Success');
  });

  it('should return an action Failure', () => {
    expect(fromBusItinerary.loadBusItinerarysFailure({ error: '' }).type).toBe(
      '[BusItinerary] Load BusItinerarys Failure'
    );
  });
});
