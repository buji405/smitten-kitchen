import React, {Component} from 'react'

class SavedRecipe extends Component {
  getRecipe(e) {
    this.props.history.push(`/saved-results/${e.target.value}`)
  }

  render () {
    console.log('saved props', this.props);
    const title = this.props.saved.map((recipe, index) => {
      return <button className="recipe-title" key={index} value={recipe.id}>{recipe.title}</button>
    })
    return (
        <div className="recipe-list" onClick={(e) => this.getRecipe(e)}>{title}</div>
    )
  }
}

export default SavedRecipe
