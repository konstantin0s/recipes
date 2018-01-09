// src/components/LikeButton.test.js
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(
    <LikeButton
      liked={false}
      onChange={toggleLike}
    />
  )

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('LikeButton')
  })

  describe('click it', () => {
    it('toggles the "liked" state', () => {
      expect(toggleLike.callCount).toBe(0)
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })
})
