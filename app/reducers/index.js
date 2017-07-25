import { combineReducers } from 'redux'
import {items, directions, displayIngredients} from './items'
import { routerReducer } from 'react-router-redux'
// import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'

const rootReducer = combineReducers({
  items,
  directions,
  displayIngredients,
  router: routerReducer
})

export default rootReducer
