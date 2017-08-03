
  // if you don't have a thing you can just return null instead and react is
  // kewl with that.

  // you might need to figure out if that particular prop exists ( action, rea  dyInYungMinutes), if it does return that prop
  // if it doesn't exist just return null
  import React, {Component} from 'react'

  const RecipeDetails = ({ print, action, fetch, recipe, recipes, ingredients, save, remove, directions, title, minutes, id}) => {
  const mins = minutes ? <p className="mins">Ready in {minutes} minutes</p> : null
  const saveBtn = save ? <button className="save-btn" onClick={() => save(recipe)}>Save</button> : null
  const deleteBtn = remove ? <button className="delete-button" onClick={() => remove(recipe)} >Remove</button> : null

    return (
      <div>
        <div className="top-section">
          <div className="left-container">
            <div className="name">{title}</div>
            {mins}
            <img className="dish-pic" src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} />
          </div>
          <div className="right-container">
            <button className="print-btn" onClick={print}>Print</button>
          {saveBtn}
          {deleteBtn}
          </div>
        </div>
        <section className="direction-section">
          <div className="ingredient-info">Ingredients</div>
          <ul className="amount">{ingredients}</ul>
          <div className="info">Directions</div>
          <ol className="instructions">{directions}</ol>
        </section>
      </div>
    )
  }

  export default RecipeDetails
