import React, { Component } from 'react'
import { render } from 'react-dom'
import Navbar from '../../components/Navbar/Navbar'
import navContainer from '../../containers/navbar-container'
import searchContainer from '../../containers/search-container'
import loginContainer from '../../containers/login-container'
import recipeListContainer from '../../containers/recipeList-container'
import Search from '../../components/Search/Search'
import recipeContainer from '../../containers/recipe-container'
import About from '../../components/About/About'
import fridgeContainer from '../../containers/fridge-container'
import Login from '../../components/Login/Login'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Router>
          <section>
            <Route path="/" component={navContainer} />
            <Route exact path="/" component={searchContainer} />
            <Route path="/login" component={loginContainer} />
            <Route path="/recipes" component={recipeListContainer} />
            <Route path="/directions/:id" component={recipeContainer} />
            <Route path="/fridge" component={fridgeContainer} />
            <Route path="/about" component={About} />
          </section>
        </Router>
      </div>
    )
  }
}

export default App
