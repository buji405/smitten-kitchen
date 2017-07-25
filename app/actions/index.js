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

export const instructions = (array) => {
  return {
    type: 'INSTRUCTIONS',
    array
  }
}

export const ingredients = (ingredient) => {
  return {
    type: 'INGREDIENTS',
    ingredient
  }
}

export const recipeFetchData = (string) => {
  console.log('string', string);
  return (dispatch) => {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=15&instructionsRequired=true&query=${string}`, {
      method: 'GET',
      headers: {
        "X-Mashape-Key": "x7aydGC6ATmsh20puvCF2PTJJKUYp1biVP5jsnspn4jyzfklP1",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((response) => response.json())
      .then((recipes) => {
        console.log('recipe results', recipes.results)
        dispatch(itemsFetchDataSuccess(recipes.results))
      })
      .catch((error) => {
        dispatch(itemsHasErrored(true))
        console.log('error fetching data')
      })
  }
}

export const getInstructions = (id) => {

  return (dispatch) => {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
      method: 'GET',
      headers: {
        "X-Mashape-Key": "x7aydGC6ATmsh20puvCF2PTJJKUYp1biVP5jsnspn4jyzfklP1",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((data) => data.json())
    .then((directions) => {
      console.log('directions', directions);


      dispatch(instructions(directions.instructions))
    })
    .catch((error) => {
      dispatch(itemsHasErrored(true))
      console.log(error, 'error fetching data');
    })
  }
}
