import { createReducer, on } from '@ngrx/store';
import * as ChangeThemeActions from '../actions/change-theme.actions';

export const changeThemeFeatureKey = 'changeTheme';

export interface ChangeThemeState {
  theme: string;
}

export const initialState: ChangeThemeState = {
  theme: '',
};

export const changeThemeStateReducer = createReducer(
  initialState,

  on(ChangeThemeActions.loadChangeThemes, (state, action): ChangeThemeState => {
    return {
      ...state,
      theme: action.theme,
    };
  })
);
