import * as reducers from './items.js'

describe('items reducer', () => {
  it('should default state to an empty array', () => {
    const initialAction = { type: 'init' }

    expect(reducers.items(undefined, initialAction)).toEqual([])
  })
  it('should return an array of items', () => {
    const actionItems = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
        recipes: [
            {title: 'Black Bean Soup', id: '1'},
            {title: 'Tortilla Soup', id: '2'}
        ]
    }
    const state  = []

    expect(reducers.items(state, actionItems)).toEqual([
      {title: 'Black Bean Soup', id: '1'},
      {title: 'Tortilla Soup', id: '2'}
    ])
  })
})

describe('isLoading reducer', () => {
  it('should default state to false', () => {
    const initialAction = { type: 'init'}

    expect(reducers.isLoading(undefined, initialAction)).toEqual(false)
  })
  it('should return true if it is loading', () => {
    const actionLoading = {
      type: 'LOADING',
      isLoading: true
    }
    const state = false;

    expect(reducers.isLoading(state, actionLoading)).toEqual(true)
  })
})

describe('directions reducer', () => {
  it('should return the recipe directions on instructions', () => {
     const directions = {
       type: 'INSTRUCTIONS',
       array: 'preheat oven to 450 degrees'
     }
     expect(reducers.directions('', directions)).toEqual('preheat oven to 450 degrees')
  })
})

describe('displayIngredient reducer', () => {
  it('state should start as an empty array', () => {
    const initialAction =  {type: 'init' }

    expect(reducers.displayIngredients(undefined, initialAction)).toEqual([])
  })
  it('should return an array of ingredients', () => {
    const displayIngredientAction = {
      type: 'FRIDGE_INGREDIENTS',
      ingredient: 'eggs'
    }

    expect(reducers.displayIngredients([], displayIngredientAction)).toEqual(['eggs'])
  })
})

describe('recipeIngredient reducer', () => {
  it('should start as an empty array', () => {
    const initialAction =  {type: 'init' }

    expect(reducers.recipeIngredient(undefined, initialAction)).toEqual([])
  })
  it('should return the ingredient amounts', () => {
    const showIngredientAmt = {
      type: 'RECIPE_INGREDIENTS',
      ingredientAmt: '1/2 cup sugar'
    }

    expect(reducers.recipeIngredient([], showIngredientAmt)).toEqual('1/2 cup sugar')
  })
})

describe('searchFridgeIngredients', () => {
  it('should start as an empty array', () => {
    const initialAction =  {type: 'init' }

    expect(reducers.recipeIngredient(undefined, initialAction)).toEqual([])
  })
  it('should return ingredients for the ingredient search', () => {
    const searchIngredients =  {
      type: 'SEARCH_FRIDGE',
      ingredients: 'salsa'
    }
    expect(reducers.searchFridgeIngredients([], searchIngredients)).toEqual('salsa')
  })
})

describe('save', () => {
  it('should start as an empty array', () => {
    const initialAction =  {type: 'init' }

    expect(reducers.recipeIngredient(undefined, initialAction)).toEqual([])
  })
  it('should return saved recipe title', () => {
    const savedTitle = {
      type: 'ADD_SAVE',
      saved: 'chicken bbq pizza'
    }
    expect(reducers.save([], savedTitle)).toEqual(['chicken bbq pizza'])
  })
})
