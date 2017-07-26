import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList/RecipeList';
import { recipeFetchData } from '../actions';

const mapStateToProps = (state) => {
  return {
    recipes: state.items,
    loading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(recipeFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
