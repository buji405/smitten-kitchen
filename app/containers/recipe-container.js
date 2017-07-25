import { connect } from 'react-redux'
import Recipe from '../components/Recipe/Recipe'
import { getInstructions } from '../actions';


const mapStateToProps = (state) => {
  return {
    recipes: state.items,
    instructions: state.directions,
    ingredients: state.recipeIngredient
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDirections: (url) => dispatch(getInstructions(url))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
