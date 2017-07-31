import React, { Component } from 'react'

class RecipeList extends Component {
  getDirections(e) {
    this.props.history.push(`/directions/${e.target.value}`)
  }

  render () {
    if(this.props.loading) {
        return(
          <div>
            <p className="loading">Loading...</p>
            <iframe src="https://giphy.com/embed/hh2haXyOKhScE" width="480" height="370" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cook-hh2haXyOKhScE"></a></p>
          </div>
        )
    }
    const recipeTitle = this.props.recipes.map((recipe, index)=> {
      const key = index
      return <button key={key}
                     className="recipe-title"
                     value={recipe.id}
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
