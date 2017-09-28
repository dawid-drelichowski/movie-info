import React from 'react'
import MovieDetails from 'components/MovieDetails'
import getModel from 'tests/mocks/helpers/models/movieDetails'
import config from 'tests/mocks/config.json'
import renderer from 'react-test-renderer'

describe('Movie details component', () => {
  function getRenderedComponent (model = getModel()) {
    return renderer.create(<MovieDetails config={config} model={model} />)
  }

  it('should not have image', () => {
    expect(getRenderedComponent(getModel({imagePath: ''})).toJSON()).toMatchSnapshot()
  })

  it('should have image', () => {
    expect(getRenderedComponent(getModel()).toJSON()).toMatchSnapshot()
  })
})
