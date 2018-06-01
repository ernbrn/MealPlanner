import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import recipes from './recipes/recipeReducer';

export default combineReducers({
  router: routerReducer,
  recipes
});
