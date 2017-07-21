export const itemsFetchDataSuccess = (recipes) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    recipes
  };
}

export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export const recipeFetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((recipes) => dispatch(itemsFetchDataSuccess(recipes)))
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log(error, 'error fetching data')
      })
  }
}
