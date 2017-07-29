import { connect } from 'react-redux'
import FridgeRecipe from '../components/FridgeRecipes/FridgeRecipes'
import { getInstructions } from '../actions';


const mapStateToProps = (state) => {
  return {
    instructions: state.directions,
    fridgeIngredients: state.searchFridgeIngredients,
    ingredients: state.recipeIngredient
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getDirections: (url) => dispatch(getInstructions(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FridgeRecipe)
