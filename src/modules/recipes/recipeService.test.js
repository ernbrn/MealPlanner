import apiClient from '../../api-client';
import MockAdapter from 'axios-mock-adapter';
import responseExample from '../../tests/responseExample';
import { generateUsableRecipeResponse } from '../../response-helpers';
import service from './recipeService';

describe('recipe service', () => {
  describe('getRandomRecipe', () => {
    const mockAxios = new MockAdapter(apiClient);
    const mockData = {
      meals: [responseExample]
    };

    it('will resolve upon a successful api call', () => {
      mockAxios.onGet('/random.php').replyOnce(200, mockData);
      const expectedResponse = generateUsableRecipeResponse(responseExample);

      expect.assertions(1);
      return service.getRandomRecipe().then(response => {
        expect(response).toEqual(expectedResponse);
      });
    });

    it('will reject upon an unsuccessful api call', () => {
      mockAxios.onGet('/random.php').replyOnce(500);

      expect.assertions(1);
      return service.getRandomRecipe().catch(error => {
        expect(error.response.status).toEqual(500);
      });
    });
  });
});
