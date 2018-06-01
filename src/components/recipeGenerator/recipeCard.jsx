import React from 'react';
import PropTypes from 'prop-types';
import IngredientCard from './ingredientCard';

const propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    source: PropTypes.string,
    video: PropTypes.string,
    ingredients: PropTypes.shape({})
  }).isRequired
};

const defaultProps = {
  id: '',
  area: '',
  category: '',
  name: '',
  thumbnail: '',
  source: '',
  video: '',
  ingredients: {}
};


function RecipeCard({ recipe }) {
  return(
    <div>
      <header>
        <h2>{ recipe.name }</h2>
        <h3>Cagegory: { recipe.category } from { recipe.area }</h3>
      </header>

      <section>
        <img src={ recipe.thumbnail } />
        <iframe id="ytplayer" type="text/html" width="640" height="360"
          src={recipe.video}
          frameBorder="0">
        </iframe>
      </section>
      <section>
        {
          Object.keys(recipe.ingredients).map((key) => {
            const ingredient = recipe.ingredients[key];
            return(
              <IngredientCard
                key={key}
                ingredient={ingredient.ingredient}
                measure={ingredient.measure}
              />
            )
          })
        }
      </section>
    </div>
  )
}

RecipeCard.propTypes = propTypes;
RecipeCard.defaultProps = defaultProps;

export default RecipeCard;
