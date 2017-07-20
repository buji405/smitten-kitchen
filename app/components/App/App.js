import React, { Component } from 'react'
import { render } from 'react-dom'
import Navbar from '../../components/Navbar/Navbar'
import navContainer from '../../containers/navbar-container'
import searchContainer from '../../containers/search-container'
import loginContainer from '../../containers/login-container'
import Search from '../../components/Search/Search'

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
            <Route exact path="/" component={navContainer} />
            <Route exact path="/" component={searchContainer} />
            <Route path="/login" component={loginContainer} />
          </section>
        </Router>
      </div>
    )
  }
}

export default App
