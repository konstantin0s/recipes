// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RecipePage from './recipes/RecipePage'
import RecipesContainer from './recipes/RecipesContainer'
import  SignUp   from '../actions/user/sign-up'
import SignIn  from '../actions/user/sign-in'





export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
        <Route path="/actions/user/sign-up" component={SignUp} />
        <Route path="/actions/user/sign-up" component={SignIn} />
      </div>
    )
  }
}
