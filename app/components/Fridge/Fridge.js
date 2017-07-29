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
  if (this.state.ingredientList) {
    const newArray = this.state.ingredientList.filter((item) => {
      console.log(item);
    })
  }
}


submit() {
  console.log('submit fridge');
  this.props.fetchIngredientRecipes(this.state.ingredientList)
}

  render () {
console.log('fridge props', this.props);
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
      </section>
    )
  }
}


export default Fridge
