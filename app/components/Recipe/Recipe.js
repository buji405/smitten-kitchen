import React, {Component} from 'react'
import print from '../helpers/print-helper.js'
import RecipeDetails from '../RecipeDetails.js'


class Recipe extends Component{
   constructor() {
     super()
     this.state={
       instructions: '',
       ingredients: ''
     }
   }


  componentDidMount() {
    const {id} = this.props.match.params
    this.props.getDirections(id)
  }

  render() {
   console.log('props', this.props);
    const { recipes, match: {params: { id } } } = this.props;
    const recipe = recipes.find(rec => rec.id === parseInt(id));


    const instructions = this.props.instructions.split('.').map((sentence, index) => {
      return <li key={index} className="sentence">{sentence}</li>
  })
    const ingredientAmt = this.props.ingredients.map((amount, index) => {
      return <li className="ingredient-amount" key={index}>{amount}</li>
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
                       recipe={recipe}
                       save={this.props.savedRecipe}/>
      </section>
    )
  }
 }

export default Recipe;
