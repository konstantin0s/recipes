import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipesContainer />
      </div>
    )
  }
}

export default App
