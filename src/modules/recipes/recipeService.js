import apiClient from '../../api-client';
import { generateUsableRecipeResponse } from '../../response-helpers';

const service = {
  getRandomRecipe(params) {
    const config = { params };
    return apiClient
      .get('/random.php', config)
      .then(response => generateUsableRecipeResponse(response.data.meals[0]));
  }
};

export default service;
