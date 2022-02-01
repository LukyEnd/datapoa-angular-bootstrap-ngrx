import { createAction, props } from '@ngrx/store';

export const loadChangeThemes = createAction(
  '[ChangeTheme] Load ChangeThemes',
  props<{ theme: string }>()
);
