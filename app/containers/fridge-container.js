import { connect } from 'react-redux'
import Fridge from '../components/Fridge/Fridge'
import {ingredients, searchFridge, deleteIngredient} from '../actions'

const mapStateToProps = (state) => {
  return {
    ingredients: state.displayIngredients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIngredient: (item) => dispatch(deleteIngredient(item)),
    displayIngredients: (item) => dispatch(ingredients(item)),
    fetchIngredientRecipes: (ingredientList) => dispatch(searchFridge(ingredientList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge)
