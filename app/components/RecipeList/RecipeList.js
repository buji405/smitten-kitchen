import React, { Component } from 'react'


class RecipeList extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <section className="recipe-list">
        <div>Chicken</div>
        <div>Pork</div>
        <div>Beef</div>
        <div>Mexican</div>
      </section>
    )
  }
}

export default RecipeList
