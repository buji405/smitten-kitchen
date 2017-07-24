import React from 'react'

const Recipe = (props) => {
  console.log(props)
  const { recipes, match: {params: { id } } } = props;
  const recipe = recipes.find(rec => rec.id === parseInt(id));

  return (
    <section>
      <div>{recipe.title}</div>
        <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} />
      <div>Directions</div>
    </section>
  )
}

export default Recipe;
