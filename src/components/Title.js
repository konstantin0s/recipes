// src/components/Title.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <h1 className="Title">{this.props.content}</h1>
    )
  }
}

export default Title