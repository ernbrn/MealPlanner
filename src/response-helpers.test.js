import {
  getIdFromKey,
  isIngredient,
  isMeasure,
  generateUsableRecipeResponse
} from './response-helpers';

describe('generateUsableRecipeResponse', () => {
  it('will generate a usable object from a RECIPE response', () => {
    const response = {
      idMeal: '1',
      strArea: 'Italian',
      strCategory: 'Pasta',
      strIngredient1: 'Spaghetti',
      strIngredient2: 'Olive Oil',
      strIngredient3: 'Onion',
      strIngredient4: '',
      strInstructions:
        'Cook the pasta, following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins. Drain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan.',
      strMeal: 'Pilchard puttanesca',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg',
      strMeasure1: '300g',
      strMeasure2: '1 tbls',
      strMeasure3: '1 finely chopped ',
      strMeasure4: '',
      strSource: 'https://www.bbcgoodfood.com/recipes/pilchard-puttanesca',
      strYoutube: 'https://www.youtube.com/watch?v=wqZzLAPmr9k'
    };

    const expectedResponse = {
      id: response.idMeal,
      area: response.strArea,
      category: response.strCategory,
      name: response.strMeal,
      thumbnail: response.strMealThumb,
      source: response.source,
      video: 'https://www.youtube.com/embed/wqZzLAPmr9k',
      ingredients: {
        1: {
          ingredient: response.strIngredient1,
          measure: response.strMeasure1
        },
        2: {
          ingredient: response.strIngredient2,
          measure: response.strMeasure2
        },
        3: {
          ingredient: response.strIngredient3,
          measure: response.strMeasure3
        }
      },
      instructions: response.strInstructions
    };

    expect(generateUsableRecipeResponse(response)).toEqual(expectedResponse);
  });
});

/*
  Helpers
*/
describe('isIngredient', () => {
  expect(isIngredient('strIngredient9')).toBe(true);
  expect(isIngredient('strSomethingElse9')).toBe(false);
});

describe('isMeasure', () => {
  expect(isMeasure('strMeasure9')).toBe(true);
  expect(isMeasure('strSomethingElse9')).toBe(false);
});

describe('getIdFromKey', () => {
  describe('for an ingredient key', () => {
    it('will get the id from the string', () => {
      const key = 'strIngredient9';
      const keyType = 'strIngredient';

      expect(getIdFromKey(key, keyType)).toBe('9');
    });
  });
});
