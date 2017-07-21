import React, { Component } from 'react'
import { recipeFetchData } from '../../actions';

class RecipeList extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchData(`https://food2fork.com/api/search?key=b6979b48a1617794d1e19b0c4a7639a0&q=shredded%20chicken`)
  }

  render () {
    return (
      <section className="recipe-list">
        <div>Chicken</div>
        <div>Pork</div>
        <div>Beef</div>
        <div>Mexican</div>
      </section>
    )
  }
}

export default RecipeList
