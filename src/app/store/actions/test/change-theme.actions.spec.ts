import * as fromChangeTheme from '../change-theme.actions';

describe('loadChangeThemes', () => {
  it('should return an action', () => {
    expect(fromChangeTheme.loadChangeThemes().type).toBe(
      '[ChangeTheme] Load ChangeThemes'
    );
  });
});
