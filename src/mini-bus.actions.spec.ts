import * as fromMiniBus from './app/store/actions/mini-bus.actions';

describe('yMiniBuss', () => {
  it('should return an action', () => {
    expect(fromMiniBus.MiniBuss().type).toBe('[MiniBus] Y MiniBuss');
  });
});
