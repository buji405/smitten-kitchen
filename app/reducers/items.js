export const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
    console.log('action', action.recipes);
    return action.recipes
  default:
    return state;
  }
}

export const directions = (state = '', action) => {
  switch (action.type) {
    case 'INSTRUCTIONS':
    console.log("directions action", action.array);
    return action.array
  default:
    return state
  }
}

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'LOADING':
    console.log(action.isLoading);
    return action.isLoading
   default:
    return state
  }
}

export const displayIngredients = (state = [], action) => {
  switch (action.type) {
    case 'FRIDGE_INGREDIENTS':
    console.log("ingredient action", action.ingredient);
    return [...state, action.ingredient]
    case 'DELETE':
    return state.filter((item) => {
      return item !== action.item
    })
  default:
    return state
  }
}

export const recipeIngredient = (state=[], action) => {
  switch(action.type) {
    case 'RECIPE_INGREDIENTS':
    console.log('recipe ingredients', action.ingredientAmt);
    return action.ingredientAmt
  default:
    return state
  }
}

export const searchFridgeIngredients = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_FRIDGE':
    return action.ingredients
  default:
  return state
  }
}
