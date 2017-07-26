import { combineReducers } from 'redux'
import {items, directions, displayIngredients, recipeIngredient, isLoading} from './items'
import { routerReducer } from 'react-router-redux'
// import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'

const rootReducer = combineReducers({
  items,
  directions,
  recipeIngredient,
  isLoading,
  displayIngredients,
  router: routerReducer
})

export default rootReducer
