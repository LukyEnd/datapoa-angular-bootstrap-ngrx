import { busReducer, initialState } from '../bus-line.reducer';

describe('BusLine Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = busReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
