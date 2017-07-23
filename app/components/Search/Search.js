import React, { Component } from 'react'

class Search extends Component {
  constructor () {
    super ()
    this.state = {
      recipeSearch: ''
    }
  }

  submitSearch(e) {
    e.preventDefault()
    this.props.fetchData(this.state.recipeSearch)
    this.setState({
      recipeSearch: ''
    })
    this.props.history.push('/recipes')
  }

  render () {
    return (
      <section className="home-page">
        <input
          type="text"
          value={this.state.recipeSearch}
          className="search"
          placeholder="search"
          onChange={(e) => this.setState({recipeSearch: e.target.value})}/>
        <button className="get-recipes" onClick={(e) => this.submitSearch(e)}>Get Recipes</button>
      </section>
    )
  }
}

export default Search;
