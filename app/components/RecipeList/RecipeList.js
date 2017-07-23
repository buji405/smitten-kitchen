import React, { Component } from 'react'
import { recipeFetchData } from '../../actions';

class RecipeList extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  getDirections(e) {
    console.log('works');
    this.props.history.push('/directions')
  }

  render () {
    console.log('props',this.props.recipes);
    const recipeTitle = this.props.recipes.map((recipe, index)=> {
      const key = index
      return <button key={key}
                     className="recipe-title"
                     onClick={(e) => this.getDirections(e)}>{recipe.title}</button>
    })

    return (
      <section className="recipe-list">
        {recipeTitle}
      </section>
    )
  }
}

export default RecipeList
