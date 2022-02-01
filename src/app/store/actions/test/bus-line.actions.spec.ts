import * as fromBusLine from '../bus-line.actions';

describe('loadBusLines', () => {
  it('should return an action', () => {
    expect(fromBusLine.loadBusLines().type).toBe('[BusLine] Load BusLines');
  });

  it('should return an action Success', () => {
    expect(fromBusLine.loadBusLinesSuccess({ busLineData: [] }).type).toBe(
      '[BusLine] Load BusLines Success'
    );
  });
  it('should return an action Failure', () => {
    expect(fromBusLine.loadBusLinesFailure({ error: '' }).type).toBe(
      '[BusLine] Load BusLines Failure'
    );
  });
});
