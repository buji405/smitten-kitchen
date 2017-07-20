import React, { Component } from 'react'

class Search extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <section className="home-page">
        <input type="text" className="search" placeholder="search"/>
      </section>
    )
  }
}

export default Search;
