import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromChangeTheme from '../reducers/change-theme.reducer';

export const selectChangeThemeState =
  createFeatureSelector<fromChangeTheme.ChangeThemeState>(
    fromChangeTheme.changeThemeFeatureKey
  );

export const getChangeTheme = createSelector(
  selectChangeThemeState,
  (state) => state.theme
);
