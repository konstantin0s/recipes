// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
    updateRecipe: PropTypes.func.isRequired
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem
      key={index}
      onChange={this.props.updateRecipe}
      { ...recipe }
    />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          {this.props.recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}

export default RecipesContainer
