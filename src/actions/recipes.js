export const toggleLikeRecipe = (recipeId) => {
  return {
    type: 'TOGGLE_LIKE_RECIPE',
    payload: recipeId
  }
}
