export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

export const addRecipe = (recipe) => {
  return {
    type: ADD_RECIPE,
    payload: recipe,
  };
};

export const removeRecipe = (recipeId) => {
  return {
    type: REMOVE_RECIPE,
    payload: recipeId,
  };
};
