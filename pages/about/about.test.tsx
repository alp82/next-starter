/* eslint-env jest */

import React from 'react'
import { render } from 'react-testing-library'

import About from './index'

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<About />)

    expect(getByText('About next-starter')).not.toBeNull()
  })
})

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<About />)

    expect(asFragment()).toMatchSnapshot()
  })
})