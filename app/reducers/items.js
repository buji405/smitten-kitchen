export const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
    console.log('action', action.recipes);
    return action.recipes
  default:
    return state;
  }
}
