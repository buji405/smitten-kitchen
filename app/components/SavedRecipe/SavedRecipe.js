import React, {Component} from 'react'

class SavedRecipe extends Component {

  getRecipe(e) {
    console.log('im here!');
    this.props.history.push(`/saved-results/${e.target.value}`)
  }

  render () {
    console.log('saved props', this.props);
    const title = this.props.saved.map((recipe, index) => {
      return <button className="recipe-title" key={index} value={recipe.id}>{recipe.title}</button>
    })
    return (
     <div onClick={(e) => this.getRecipe(e)}>{title}</div>
    )
  }
}

export default SavedRecipe
