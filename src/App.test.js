// src/App.test.js
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Title from './components/Title'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })
})
