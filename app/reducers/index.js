import { combineReducers } from 'redux'
// import { users, items, itemsHasErrored, itemsIsLoading, loginUser, errors } from './items'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({

  router: routerReducer
})


export default rootReducer
