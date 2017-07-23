import { combineReducers } from 'redux'
import {items} from './items'
import { routerReducer } from 'react-router-redux'
// import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'

const rootReducer = combineReducers({
  items,
  router: routerReducer
})

export default rootReducer
