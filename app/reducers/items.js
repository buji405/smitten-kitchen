export const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
    return action.recipes
  default:
    return state;
  }
}

export const directions = (state = '', action) => {
  switch (action.type) {
    case 'INSTRUCTIONS':
    return action.array
  default:
    return state
  }
}

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'LOADING':
    return action.isLoading
   default:
    return state
  }
}

export const displayIngredients = (state = [], action) => {
  switch (action.type) {
    case 'FRIDGE_INGREDIENTS':
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

export const save = (state = [], action) => {
  switch(action.type) {
    case 'ADD_SAVE':
    return [...state, action.saved]
    case 'DELETE_SAVED':
    return state.filter((savedRecipe)=> {
      return savedRecipe !== action.savedRecipe
    })
  default:
    return state
 }
}
