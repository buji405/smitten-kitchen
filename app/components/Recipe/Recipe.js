import React, {Component} from 'react'

class Recipe extends Component{
   constructor() {
     super()
     this.state={
       instructions: ''
     }
   }

   componentDidMount() {
      const {id} = this.props.match.params
     fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
       method: 'GET',
       headers: {
         "X-Mashape-Key": "x7aydGC6ATmsh20puvCF2PTJJKUYp1biVP5jsnspn4jyzfklP1",
         "Content-Type": "application/json",
         "Accept": "application/json"
       }
     })
      .then((data) => data.json())
      .then((directions) => {

        this.setState({instructions: directions.instructions})
      } )
   }

  print() {
    window.print()
  }

  render () {
    const { recipes, match: {params: { id } } } = this.props;
    const recipe = recipes.find(rec => rec.id === parseInt(id));
    const instructions = this.state.instructions.split('.').map((sentence, index) => {
      return <li key={index} className="sentence">{sentence}</li>

    })
    return (
      <section>
        <div className="top-section">
          <div className="left-container">
            <div className="name">{recipe.title}</div>
            <p className="mins">Ready in {recipe.readyInMinutes} minutes</p>
            <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} />
          </div>
          <div className="right-container">
            <button className="print-btn" onClick={() => this.print()}>Print</button>
            <button className="save-btn" onClick={() => this.print()}>Save</button>
          </div>
        </div>
        <section className="direction-section">
          <div className="info">Directions</div>
          <ol className="instructions">{instructions}</ol>
        </section>
      </section>
    )
  }
 }

export default Recipe;
