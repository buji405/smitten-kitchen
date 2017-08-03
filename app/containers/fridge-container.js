import { connect } from 'react-redux'
import Fridge from '../components/Fridge/Fridge'
import {ingredients, searchFridge, deleteIngredient, saveRecipe, fridgeIngredientResults} from '../actions'

const mapStateToProps = (state) => {
  return {
    ingredients: state.displayIngredients,
    fridgeIngredients: state.searchFridgeIngredients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIngredient: (item) => dispatch(deleteIngredient(item)),
    displayIngredients: (item) => dispatch(ingredients(item)),
    fetchIngredientRecipes: (ingredientList) => dispatch(fridgeIngredientResults(ingredientList)),
    savedRecipe: (saved) => dispatch(saveRecipe(saved))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge)
