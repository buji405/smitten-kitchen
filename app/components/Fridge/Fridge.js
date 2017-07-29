import React, {Component} from 'react'

class Fridge extends Component {
  constructor() {
    super()
    this.state={
      ingredientInput: '',
      ingredientList: []
    }
  }


addIngredient() {
  console.log('this on?');
  let newIngredientList = [...this.state.ingredientList, this.state.ingredientInput]
  this.props.displayIngredients(this.state.ingredientInput)
  this.setState({ingredientList: newIngredientList,
                ingredientInput: ''})
  document.querySelector('.inputIngredients').focus()
}

delete(item) {
  // send to a delete action
  // action goes to the reducer
  // filter based off of the item
  this.props.deleteIngredient(item)
}


submit() {
  console.log('submit fridge');
  this.props.fetchIngredientRecipes(this.state.ingredientList)
  document.querySelector('.prompt').innerText = 'Whatcha going to make?'
}

  render () {
    console.log('fridge props', this.props);


    const title = this.props.fridgeIngredients.map((ingredient, index) => {
      return <button key={index}
                     className="fridge-results">{ingredient.title}</button>
    })
    return (
      <section>
        <h2>Add ingredients you'd like you use below</h2>
        <input type='text'
               className="inputIngredients"
               placeholder="Ingredients"
               value={this.state.ingredientInput}
               onChange={(e) => this.setState({ingredientInput: e.target.value})}/>
             <button className="add" onClick={() => this.addIngredient()}>Add</button>
        <section className="ingredient-container">
          <div>{this.props.ingredients.map((item, index) => <li key={index} className="ingredient">{item}
          <button className="delete-btn" onClick={(e) => this.delete(item)}>X</button></li>)}</div>
        </section>
        <button className="submit" onClick={() => this.submit()}>Fetch Meals</button>
        <section className="fridge-results-container">
          <div className="prompt"></div>
          {title}
        </section>
      </section>
    )
  }
}

export default Fridge
