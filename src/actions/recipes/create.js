// src/actions/recipes/create.js
export const CREATE_RECIPE = 'CREATE_RECIPE'

export default (newRecipe) => {
  return {
    type: CREATE_RECIPE,
    payload: newRecipe
  }
}
