import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList/RecipeList';
import { recipeFetchData } from '../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(recipeFetchData(url))
  }
}



export default connect(null, mapDispatchToProps)(RecipeList)
