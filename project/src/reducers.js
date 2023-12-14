import { ADD_RECIPE, REMOVE_RECIPE } from './actions';

const initialState = {
  recipes: [],
};

const recipeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
};
export default recipeBookReducer;
