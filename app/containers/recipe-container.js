import { connect } from 'react-redux'
import Recipe from '../components/Recipe/Recipe'
import { getInstructions, saveRecipe } from '../actions';


const mapStateToProps = (state) => {
  return {
    recipes: state.items,
    instructions: state.directions,
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



export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
