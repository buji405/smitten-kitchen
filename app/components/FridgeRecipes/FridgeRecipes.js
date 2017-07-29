import React, {Component} from 'react'

class FridgeRecipe extends Component {
   constructor() {
     super()
     this.state={

     }
   }

   componentDidMount() {
     const {id} = this.props.match.params
     this.props.getDirections(id)
   }

  render () {


   const { fridgeIngredients, match: {params: { id } } } = this.props;
   const fridge = fridgeIngredients.find(rec => rec.id === parseInt(id));
   const instructions = this.props.instructions.split('.').map((sentence, index) => {
     return <li key={index} className="sentence">{sentence}</li>
 })

 const ingredients = this.props.ingredients.map((amount, index) => {
   return <li className="ingredient-amount" key={index}>{amount}</li>
 })
   console.log(fridge);
   console.log('props in fridgerator', this.props);
    return (
      <section>
        <div className="top-section">
          <div className="left-container">
            <div className="fridge-name">{fridge.title}</div>
              <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} />
          </div>
          <div className="right-container">
            <button className="print-btn" >Print</button>
            <button className="save-btn">Save</button>
          </div>
        </div>
        <section className="direction-section">
          <div className="ingredient-info">Ingredients</div>
          <ul className="amount">{ingredients}</ul>
          <div className="info">Directions</div>
          <ol className="instructions">{instructions}</ol>
        </section>
      </section>
    )
  }
}

export default FridgeRecipe;
