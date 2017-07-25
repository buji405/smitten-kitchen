import { connect } from 'react-redux'
import Fridge from '../components/Fridge/Fridge'
import {ingredients} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    displayIngredients: (item) => dispatch(ingredients(item))
  }
}

export default connect(null, mapDispatchToProps)(Fridge)
