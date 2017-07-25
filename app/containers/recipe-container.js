import { connect } from 'react-redux'
import Recipe from '../components/Recipe/Recipe'
import { getInstructions } from '../actions';


const mapStateToProps = (state) => {
  return {
    recipes: state.items
  }
}




export default connect(mapStateToProps, null)(Recipe)
