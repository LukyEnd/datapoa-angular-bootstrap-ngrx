import * as fromBusLine from '../bus-line.actions';

describe('loadBusLines', () => {
  it('should return an action', () => {
    expect(fromBusLine.loadBusLines().type).toBe('[BusLine] Load BusLines');
  });
});
