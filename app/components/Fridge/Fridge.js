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
}

  render () {

    return (
      <section>
        <h2>Type in ingredients below</h2>
        <input type='text'
               placeholder="Add Ingredients"
               value={this.state.ingredientInput}
               onChange={(e) => this.setState({ingredientInput: e.target.value})}/>
        <button onClick={() => {this.addIngredient()}}>Add</button>
        <div>{this.state.ingredientList.map((item, index) => <li key={index}>{item}</li>)}</div>
      </section>
    )
  }
}


export default Fridge
