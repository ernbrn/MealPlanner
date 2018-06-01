import * as types from './recipeConstants';

export const initialState = {
  error: false,
  loading: false,
  recipe: null
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RECIPE_MEAL_PLANS_GENERATE_ERROR:
      return {
        ...initialState,
        error: action.payload,
        loading: false
      };
    case types.GET_RECIPE_MEAL_PLANS_GENERATE_START:
      return {
        ...initialState,
        loading: true
      };
    case types.GET_RECIPE_MEAL_PLANS_GENERATE_SUCCESS:
      return {
        ...initialState,
        error: false,
        laoding: false,
        recipe: action.payload
      };
    default:
      return initialState;
  }
}
