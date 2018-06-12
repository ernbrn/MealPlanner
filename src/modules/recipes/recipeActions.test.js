import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { lorem, random } from 'faker';
import { resolvedPromise, rejectedPromise } from '../../../test/test-helpers';
import * as types from './recipeConstants';
import service from './recipeService';
import * as actions from './recipeActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./recipeService');

describe('getRandomRecipe', () => {
  const action = 'getRandomRecipe';
  const baseActionType = 'GET_RECIPE_MEAL_PLANS_GENERATE';
  // Use this base action to create
  // GET_RECIPE_MEAL_PLANS_GENERATE_START
  // GET_RECIPE_MEAL_PLANS_GENERATE_SUCCESS
  // GET_RECIPE_MEAL_PLANS_GENERATE_ERROR
  const transformedResponse = {
    id: random.number(),
    category: lorem.word(),
    name: lorem.word()
  };

  describe('on success', () => {
    const store = mockStore({ recipes: { recipe: null } });
    const expectedActions = [
      { type: types[`${baseActionType}_START`] },
      { type: types[`${baseActionType}_SUCCESS`], payload: transformedResponse }
    ];

    beforeEach(() => {
      service[action].mockReturnValue(resolvedPromise(transformedResponse));
    });

    afterEach(() => {
      service[action].mockReset();
    });

    it('dispatches the correct start action', () => {
      expect.assertions(1);
      return store.dispatch(actions[action]()).then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
      });
    });

    it('dispatches the correct success action with payload', () => {
      expect.assertions(1);
      return store.dispatch(actions[action]()).then(() => {
        expect(store.getActions()[1]).toEqual(expectedActions[1]);
      });
    });
  });

  describe('on error', () => {
    const store = mockStore({ recipes: { recipe: null } });
    const expectedActions = [
      { type: types[`${baseActionType}_START`] },
      { type: types[`${baseActionType}_ERROR`], payload: 'error' }
    ];

    beforeEach(() => {
      service[action].mockReturnValue(rejectedPromise('error'));
    });

    afterEach(() => {
      service[action].mockReset();
    });

    it('dispatches the correct start action', () => {
      expect.assertions(1);
      store.dispatch(actions[action]()).then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
      });
    });

    it('dispatches the correct error action with error payload', () => {
      expect.assertions(1);
      return store.dispatch(actions[action]()).then(() => {
        expect(store.getActions()[1]).toEqual(expectedActions[1]);
      });
    });
  });
});
