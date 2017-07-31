import React, {Component} from 'react'

class FridgeRecipe extends Component {
   componentDidMount() {
     const {id} = this.props.match.params
     this.props.getDirections(id)
   }

   print() {
     window.print()
   }

   save(fridge) {
     console.log('in fridge');
     this.props.savedRecipe(fridge)
   }

  render () {
     console.log('fridge props', this.props);
   const { fridgeIngredients, match: {params: { id } } } = this.props;
   const fridge = fridgeIngredients.find(rec => rec.id === parseInt(id));
   const instructions = this.props.instructions.split('.').map((sentence, index) => {
     return <li key={index} className="sentence">{sentence}</li>
 })

 const ingredients = this.props.ingredients.map((amount, index) => {
   return <li className="ingredient-amount" key={index}>{amount}</li>
 })

    return (
      <section>
        <div className="top-section">
          <div className="left-container">
            <div className="fridge-name">{fridge.title}</div>
              <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} />
          </div>
          <div className="right-container">
            <button className="print-btn" onClick={() => this.print()} >Print</button>
            <button className="save-btn" onClick={() => this.save(fridge)}>Save</button>
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
