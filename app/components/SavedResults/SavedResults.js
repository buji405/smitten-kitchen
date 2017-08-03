import React, {Component} from 'react'
import print from '../helpers/print-helper.js'
import RecipeDetails from '../RecipeDetails.js'


class SavedResults extends Component {

delete() {
  console.log('cool');
}
  render() {
   console.log('props', this.props);
    const { recipes, match: {params: { id } } } = this.props;
    const recipe = recipes.find(rec => rec.id === parseInt(id));

    const instructions = this.props.instructions.split('.').map((sentence, index) => {
      return <li key={index} className="sentence">{sentence}</li>
  })
    const ingredientAmt = this.props.ingredients.map((amount, index) => {
      return <li className="ingredient-amount"  key={index}>{amount}</li>
    })
    return (
      <section>
        <RecipeDetails recipes={recipes}
                       id={id}
                       directions={instructions}
                       ingredients={ingredientAmt}
                       title={recipe.title}
                       minutes={recipe.readyInMinutes}
                       print={print}
                       remove={this.props.deleteSaved}/>
      </section>
    )
  }
}

export default SavedResults
