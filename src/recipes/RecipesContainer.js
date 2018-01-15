// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import './RecipesContainer.css'
import RecipeEditor from './RecipeEditor'
import  fetch  from '../actions/recipes/fetch'


class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
  }

  componentWillMount() {
    this.props.fetch()
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
          <RecipeEditor />

        </header>

        <main>
          {this.props.recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

// Same as:
// const mapStoreToProps = (store) => {
//   return { recipes: store.recipes }
// }

export default connect(mapStateToProps, {fetch})(RecipesContainer)
