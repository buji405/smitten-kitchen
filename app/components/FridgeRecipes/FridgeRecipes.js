import React, {Component} from 'react'
import print from '../helpers/print-helper.js'
import RecipeDetails from '../RecipeDetails.js'

class FridgeRecipe extends Component {
   componentDidMount() {
     const {id} = this.props.match.params
     this.props.getDirections(id)
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

 const ingredientAmt = this.props.ingredients.map((amount, index) => {
   return <li className="ingredient-amount" key={index}>{amount}</li>
 })

    return (
      <section>
        <RecipeDetails recipes={fridgeIngredients}
                       id={id}
                       directions={instructions}
                       ingredients={ingredientAmt}
                       title={fridge.title}
                       print={print}
                       recipe={fridge}
                       save={this.props.savedRecipe}/>
      </section>
    )
  }
}

export default FridgeRecipe;
