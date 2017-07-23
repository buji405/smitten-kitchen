import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './components/App/App'
import rootReducer from './reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
const history = createHistory();
import ReduxThunk from 'redux-thunk';
const middleware = routerMiddleware(history);
const store = configureStore()

function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(ReduxThunk, middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

ReactDOM.render(
<Provider store={store}>
   <ConnectedRouter history={history}>
     <Route path='/' component={App} />
   </ConnectedRouter>

</Provider>, document.getElementById('main'))
