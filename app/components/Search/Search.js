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
    if (e.keyCode === 13) {
      this.props.fetchData(this.state.recipeSearch)
      this.setState({
        recipeSearch: ''
      })
      this.props.history.push('/recipes')
    }
  }

  render () {
    return (
      <section className="home-page">
        <input
          type="text"
          value={this.state.recipeSearch}
          className="search"
          placeholder="search"
          onKeyUp={(e) => this.submitSearch(e)}
          onChange={(e) => this.setState({recipeSearch: e.target.value})}/>
      </section>
    )
  }
}

export default Search;
