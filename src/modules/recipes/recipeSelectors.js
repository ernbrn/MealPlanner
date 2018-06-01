import { createSelector } from 'reselect';

export const selectSlice = state => state.recipes;

export const selectRecipe = createSelector(selectSlice, state => state.recipe);

export const selectLoading = createSelector(
  selectSlice,
  state => state.loading
);
