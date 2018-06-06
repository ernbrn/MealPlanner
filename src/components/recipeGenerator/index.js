import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectRecipe,
  selectLoading
} from '../../modules/recipes/recipeSelectors';
import { getRandomRecipe } from '../../modules/recipes/recipeActions';
import RecipeCard from './recipeCard';

function RecipeGenerator(props) {
  return (
    <div>
      <h1>Ring the dinner bell</h1>

      <p>
        <button
          onClick={() => props.getRandomRecipe()}
          disabled={props.loading}>
          Get a meal plan!
        </button>
      </p>

      {props.recipe && <RecipeCard recipe={props.recipe} />}
    </div>
  );
}

export default connect(
  createStructuredSelector({
    loading: selectLoading,
    recipe: selectRecipe
  }),
  {
    getRandomRecipe
  }
)(RecipeGenerator);
