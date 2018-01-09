// src/recipes/RecipesContainer.test.js
import React from 'react'
import { shallow } from 'enzyme'
import RecipesContainer from './RecipesContainer'
import RecipeItem from './RecipeItem'
import Title from '../components/Title'
import { recipes } from '../App'

describe('<RecipesContainer />', () => {
  const container = shallow(<RecipesContainer recipes={recipes} />)

  it('is wrapped in a div with class name "recipes"', () => {
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('recipes')
  })

  it('sets the Title to "All Recipes"', () => {
    expect(container).toContainReact(<Title content="Recipes" />)
  })

  it('renders all recipes as a RecipeItem', () => {
    recipes.map((recipe, index) => {
      return expect(container).toContainReact(<RecipeItem key={index} { ...recipe } />)
    })
  })
})
