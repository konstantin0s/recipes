// src/reducers/recipes.test.js

import reducer, { recipes } from './recipes'

describe('recipes reducer', () => {
  const initialState = recipes

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  describe('TOGGLE_LIKE_RECIPE', () => {
    const initialState = [
      {
        _id: 1234,
        liked: false
      },
      {
        _id: 1235,
        liked: false
      }
    ]

    const action = {
      type: 'TOGGLE_LIKE_RECIPE',
      payload: 1234
    }

    const eventualState = [
      {
        _id: 1234,
        liked: true
      },
      {
        _id: 1235,
        liked: false
      }
    ]

    it('toggles recipe.liked', () => {
      expect(reducer(initialState, action)).toEqual(eventualState)
    })
  })
})
