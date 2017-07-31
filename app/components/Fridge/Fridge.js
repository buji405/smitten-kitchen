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
  let newIngredientList = [...this.state.ingredientList, this.state.ingredientInput]
  this.props.displayIngredients(this.state.ingredientInput)
  this.setState({ingredientList: newIngredientList,
                ingredientInput: ''})
  document.querySelector('.inputIngredients').focus()
}

delete(item) {
  this.state.ingredientList.pop(item)
  this.props.deleteIngredient(item)
}

submit() {
  const ingredients = this.state.ingredientList.map((ingredient) => {
    return ingredient
  })
  this.props.fetchIngredientRecipes(ingredients)
  document.querySelector('.prompt').innerText = 'Whatcha going to make?'
}

fridgeResults(e) {
  this.props.history.push(`/fridge-results/${e.target.value}`)
}

  render () {
    const title = this.props.fridgeIngredients.map((ingredient, index) => {
      return <button key={index}
                     className="fridge-results"
                     value={ingredient.id}
                     onClick={(e) => this.fridgeResults(e)}>{ingredient.title}</button>
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
