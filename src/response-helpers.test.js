import {
  getIdFromKey,
  isIngredient,
  isMeasure,
  generateUsableRecipeResponse
} from './response-helpers';
import responseExample from './tests/responseExample';

describe('generateUsableRecipeResponse', () => {
  it('will generate a usable object from a RECIPE response', () => {
    const expectedResponse = {
      id: responseExample.idMeal,
      area: responseExample.strArea,
      category: responseExample.strCategory,
      name: responseExample.strMeal,
      thumbnail: responseExample.strMealThumb,
      source: responseExample.source,
      video: 'https://www.youtube.com/embed/wqZzLAPmr9k',
      ingredients: {
        1: {
          ingredient: responseExample.strIngredient1,
          measure: responseExample.strMeasure1
        },
        2: {
          ingredient: responseExample.strIngredient2,
          measure: responseExample.strMeasure2
        },
        3: {
          ingredient: responseExample.strIngredient3,
          measure: responseExample.strMeasure3
        }
      },
      instructions: responseExample.strInstructions
    };

    expect(generateUsableRecipeResponse(responseExample)).toEqual(
      expectedResponse
    );
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
