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


export const displayIngredients = (state = [], action) => {
  switch (action.type) {
    case 'INGREDIENTS':
    console.log("ingredient action", action.ingredient);
    return [...state, action.ingredient]
  default:
    return state
  }
}
