import { connect } from 'react-redux'
import FridgeRecipe from '../components/FridgeRecipes/FridgeRecipes'
import { getInstructions, saveRecipe } from '../actions';


const mapStateToProps = (state) => {
  return {
    instructions: state.directions,
    fridgeIngredients: state.searchFridgeIngredients,
    ingredients: state.recipeIngredient,
    saved: state.save
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDirections: (url) => dispatch(getInstructions(url)),
    savedRecipe: (saved) => dispatch(saveRecipe(saved))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FridgeRecipe)
