const ingredientKey = 'strIngredient';
const measureKey = 'strMeasure';

export function generateUsableRecipeResponse(response) {
  const ingredients = [];

  let returnObject = {
    id: response.idMeal,
    area: response.strArea,
    category: response.strCategory,
    name: response.strMeal,
    thumbnail: response.strMealThumb,
    source: response.source,
    video: embeddedYouTubeUrl(response.strYoutube),
    ingredients: {},
    instructions: response.strInstructions
  };

  // Iterate through ingredients and create ingredient objects
  Object.keys(response).map(key => {
    if (isIngredient(key) && response[key]) {
      returnObject.ingredients[getIdFromKey(key, ingredientKey)] = {
        ingredient: response[key]
      };
    }

    if (isMeasure(key) && response[key]) {
      returnObject.ingredients[getIdFromKey(key, measureKey)].measure =
        response[key];
    }
  });

  return returnObject;
}

export function isIngredient(key) {
  const keyString = key.toString();
  return keyString.startsWith(ingredientKey);
}

export function isMeasure(key) {
  const keyString = key.toString();
  return keyString.startsWith(measureKey);
}

export function getIdFromKey(key, keyType) {
  const keyString = key.toString();
  return keyString.substring(keyString.lastIndexOf(keyType) + keyType.length);
}

export function embeddedYouTubeUrl(videoUrl) {
  const videoKey = videoUrl.split('v=')[1];
  return `https://www.youtube.com/embed/${videoKey}`;
}
