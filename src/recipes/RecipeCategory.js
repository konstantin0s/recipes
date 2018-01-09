import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'
import './RecipeCategory.css'

class RecipeCategory extends PureComponent {
  static propTypes = {
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  renderIcon() {
    const { vegan, vegetarian, pescatarian } = this.props

    if (vegan) return <img src={Vegan} alt="vegan" />
    if (vegetarian) return <img src={Vegetarian} alt="vegetarian" />
    if (pescatarian) return <img src={Pescatarian} alt="pescatarian" />

    return null
  }

  renderLabel() {
    const { vegan, vegetarian, pescatarian } = this.props

    if (vegan) return <span>Vegan</span>
    if (vegetarian) return <span>Vegetarian</span>
    if (pescatarian) return <span>pescatarian</span>

    return null
  }

  classNames() {
    const { vegan, vegetarian, pescatarian } = this.props

    const baseClass = 'RecipeCategory'

    if (vegan) return baseClass + ' vegan'
    if (vegetarian) return baseClass + ' vegetarian'
    if (pescatarian) return baseClass + ' pescatarian'

    return baseClass
  }

  render() {
    const { vegan, vegetarian, pescatarian } = this.props

    if (!vegan && !vegetarian && !pescatarian) return null

    return (
      <li className={this.classNames()}>
        { this.renderIcon() }
        { this.renderLabel() }
      </li>
    )
  }
}

export default RecipeCategory
