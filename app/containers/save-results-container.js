import { connect } from 'react-redux'
import SavedResults from '../components/SavedResults/SavedResults'
import {deleteSaved} from '../actions'

const mapStateToProps = (state) => {
  return {
    recipes: state.items,
    instructions: state.directions,
    ingredients: state.recipeIngredient,
    fridgeIngredients: state.searchFridgeIngredients
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDirections: (url) => dispatch(getInstructions(url)),
    deleteSaved: (recipe) => dispatch(deleteSaved(recipe))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SavedResults)
