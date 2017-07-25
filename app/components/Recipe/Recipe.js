import React, {Component} from 'react'

class Recipe extends Component{
   constructor() {
     super()
     this.state={
       instructions: '',
       ingredients: ''
     }
   }

  print() {
    window.print()
  }

  componentDidMount() {
    const {id} = this.props.match.params
    this.props.getDirections(id)
  }

  render () {
    console.log('props in recipe',this.props.ingredients);
    const { recipes, match: {params: { id } } } = this.props;
    const recipe = recipes.find(rec => rec.id === parseInt(id));
    const instructions = this.props.instructions.split('.').map((sentence, index) => {
      return <li key={index} className="sentence">{sentence}</li>
  })
    const ingredients = this.props.ingredients.map((amount, index) => {
      return <li key={index}>{amount}</li>
    })


    return (
      <section>
        <div className="top-section">
          <div className="left-container">
            <div className="name">{recipe.title}</div>
            <p className="mins">Ready in {recipe.readyInMinutes} minutes</p>
            <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} />
          </div>
          <div className="right-container">
            <button className="print-btn" onClick={() => this.print()}>Print</button>
            <button className="save-btn">Save</button>
          </div>
        </div>
        <section className="direction-section">
          <div className="ingredient-info">Ingredients</div>
          <div className="amount">{ingredients}</div>
          <div className="info">Directions</div>
          <ol className="instructions">{instructions}</ol>
        </section>
      </section>
    )
  }
 }

export default Recipe;
