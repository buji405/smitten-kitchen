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

delete(id) {
  console.log('hi');
  if (this.state.ingredientList) {
    const newArray = this.state.ingredientList.filter((item) => {
      console.log(item);
    })
  }
}


  render () {

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
          <div>{this.state.ingredientList.map((item, index) => <li key={index} className="ingredient">{item}
          <button className="delete-btn" onClick={() => this.delete()}>X</button></li>)}</div>
        </section>
        <button className="submit">Fetch Meals</button>
      </section>
    )
  }
}


export default Fridge
