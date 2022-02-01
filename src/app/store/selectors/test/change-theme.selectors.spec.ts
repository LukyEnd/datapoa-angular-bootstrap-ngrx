import * as fromChangeTheme from '../../reducers/change-theme.reducer';
import { selectChangeThemeState } from '../change-theme.selectors';

describe('ChangeTheme Selectors', () => {
  it('should select the feature state', () => {
    const result = selectChangeThemeState({
      [fromChangeTheme.changeThemeFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
