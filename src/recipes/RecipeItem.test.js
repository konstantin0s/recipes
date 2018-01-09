// src/recipes/RecipeItem.test.js
import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "RecipeItem"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('RecipeItem')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).toHaveText(recipe.title)
  })
})
