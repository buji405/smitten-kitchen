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

export const loading = (bool) => {
  return {
    type: 'LOADING',
    isLoading: bool
  }
}

export const instructions = (array) => {
  return {
    type: 'INSTRUCTIONS',
    array
  }
}

export const ingredients = (ingredient) => {
  return {
    type: 'FRIDGE_INGREDIENTS',
    ingredient
  }
}

export const searchFridge = (ingredients) => {
  return {
    type: 'SEARCH_FRIDGE',
    ingredients
  }
}

export const recipeIngredients = (ingredientAmt) => {
   return {
     type: 'RECIPE_INGREDIENTS',
     ingredientAmt
   }
}

export const deleteIngredient = (item) => {
  return {
    type: 'DELETE',
    item
  }
}

export const saveRecipe = (saved) => {
    return {
      type: 'ADD_SAVE',
      saved
    }
  }

export const recipeFetchData = (string) => {
  console.log('string', string);
  return (dispatch) => {
    dispatch(loading(true))

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
        dispatch(itemsFetchDataSuccess(recipes.results))
        setTimeout(() => {
          dispatch(loading(false))

        }, 2000)
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
      const recipeIngredient = directions.extendedIngredients.map((food) => food.originalString);
      dispatch(instructions(directions.instructions))
      dispatch(recipeIngredients(recipeIngredient))
    })
    .catch((error) => {
      dispatch(itemsHasErrored(true))
      console.log(error, 'error fetching data');
    })
  }
}

export const fridgeIngredientResults = (ingredients) => {
  return(dispatch) => {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredients}&limitLicense=false&number=5&ranking=1`, {
      method: 'GET',
      headers: {
        "X-Mashape-Key": "x7aydGC6ATmsh20puvCF2PTJJKUYp1biVP5jsnspn4jyzfklP1",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((response) => response.json())
      .then((fridgeData) => {
        console.log('fridge data', fridgeData);
        dispatch(searchFridge(fridgeData))
      })
      .catch((error) => {
        dispatch(itemHasErrored(true))
        console.log(error, 'error fetching data');
      })
  }
}
