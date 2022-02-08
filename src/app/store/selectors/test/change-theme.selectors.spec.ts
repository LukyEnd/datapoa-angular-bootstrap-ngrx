import * as fromChangeTheme from '../../reducers/change-theme.reducer';
import { selectChangeThemeState } from '../change-theme.selectors';

describe('ChangeTheme Selectors', () => {
  const ChangeThemeState: fromChangeTheme.ChangeThemeState = {
    theme: '',
  };

  it('should select the feature state', () => {
    const result = selectChangeThemeState({
      [fromChangeTheme.changeThemeFeatureKey]: ChangeThemeState,
    });

    expect(ChangeThemeState).toEqual(result);
  });
});
