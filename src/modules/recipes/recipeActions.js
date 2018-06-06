import service from './recipeService';
import * as types from './recipeConstants';

export function getRandomRecipe(params = {}) {
  return dispatch => {
    dispatch({ type: types.GET_RECIPE_MEAL_PLANS_GENERATE_START });
    service
      .getRandomRecipe(params)
      .then(payload =>
        dispatch({
          type: types.GET_RECIPE_MEAL_PLANS_GENERATE_SUCCESS,
          payload
        })
      )
      .catch(payload =>
        dispatch({ type: types.GET_RECIPE_MEAL_PLANS_GENERATE_ERROR, payload })
      );
  };
}
