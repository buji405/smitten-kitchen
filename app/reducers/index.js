import { combineReducers } from 'redux'
import {items, directions, displayIngredients, save, recipeIngredient, isLoading, searchFridgeIngredients} from './items'
import { routerReducer } from 'react-router-redux'
// import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'

const rootReducer = combineReducers({
  items,
  directions,
  recipeIngredient,
  searchFridgeIngredients,
  isLoading,
  save,
  displayIngredients,
  router: routerReducer
})

export default rootReducer
