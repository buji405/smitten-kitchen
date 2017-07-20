import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar'
import navContainer from './containers/navbar-container'
import searchContainer from './containers/search-container'
import loginContainer from './containers/login-container'
import Search from './components/Search/Search'
import {Provider} from 'react-redux'
import Login from './components/Login/Login'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './components/App/App'
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// const history = createHistory();
import ReduxThunk from 'redux-thunk';
const middleware = routerMiddleware(history);
const store = configureStore()

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk, middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
// <ConnectedRouter history={history}>

// </ConnectedRouter>

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('main'))
