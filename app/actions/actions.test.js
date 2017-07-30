import * as actions from '../actions'

describe('action', () => {
  it('should return an error when itemsHasErrored', () => {
    const action = actions.itemsHasErrored(false)

    expect(action.hasErrored).toEqual(false)
    expect(action.type).toEqual('ITEMS_HAS_ERRORED')
  })
})

it('should return loading when itemIsLoading', () => {
  const action = actions.loading(true)

  expect(action.isLoading).toEqual(true)
  expect(action.type).toEqual('LOADING')
})

it('should return recipes when itemsFetchDataSuccess', () => {
  const recipes =  {key: 'value'}
  const action = actions.itemsFetchDataSuccess(recipes)

  expect(action.recipes).toEqual({key: 'value'})
  expect(action.type).toEqual('ITEMS_FETCH_DATA_SUCCESS')
})

it('should return recipe directions when instructions', () => {
  const array = {key: 'value'}
  const action = actions.instructions(array)

  expect(action.array).toEqual({key: 'value'})
  expect(action.type).toEqual('INSTRUCTIONS')
})

it('should add an ingredient in the what is in the fridge section', () => {
  const ingredient = 'eggs'
  const action = actions.ingredients(ingredient)

  expect(action.ingredient).toEqual('eggs')
  expect(action.type).toEqual('FRIDGE_INGREDIENTS')
})

it('should delete an ingredient in the what is in the fridge section', () => {
  const item = 'bacon'
  const action = actions.deleteIngredient(item)

  expect(action.item).toEqual('bacon')
  expect(action.type).toEqual('DELETE')
})

it('should be able to search fridge by ingredients', () => {
  const ingredients = 'salsa, eggs, bacon'
  const action = actions.searchFridge(ingredients)

  expect(action.ingredients).toEqual('salsa, eggs, bacon')
  expect(action.type).toEqual('SEARCH_FRIDGE')
})

it('should return recipe ingredient amounts', () => {
  const ingredientAmt = '1 teaspoon olive oil'
  const action = actions.recipeIngredients(ingredientAmt)

  expect(action.ingredientAmt).toEqual('1 teaspoon olive oil')
  expect(action.type).toEqual('RECIPE_INGREDIENTS')
})
