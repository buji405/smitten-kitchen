import { connect } from 'react-redux'
import Search from '../components/Search/Search'
import { recipeFetchData } from '../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(recipeFetchData(url))
  }
}

export default connect(null, mapDispatchToProps)(Search)
