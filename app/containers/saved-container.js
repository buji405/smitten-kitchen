import { connect } from 'react-redux'
import SavedRecipe from '../components/SavedRecipe/SavedRecipe'

const mapStateToProps = (state) => {
  return {
    saved: state.save
  }
}

export default connect(mapStateToProps, null)(SavedRecipe)
