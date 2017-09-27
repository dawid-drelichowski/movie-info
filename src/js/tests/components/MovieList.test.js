import React from 'react'
import MovieList from 'components/MovieList'
import getModel from 'tests/mocks/helpers/models/movie'
import config from 'tests/mocks/config.json'
import service from 'tests/mocks/services/Movie'
import renderer from 'react-test-renderer'

describe('Movie list component', () => {
  function getRenderedComponent (collection = false) {
    return renderer.create(<MovieList config={config} service={service} collection={collection} />)
  }

  it('should be empty', () => {
    expect(getRenderedComponent().toJSON()).toMatchSnapshot()
  })

  it('should display "no results"', () => {
    expect(getRenderedComponent([]).toJSON()).toMatchSnapshot()
  })

  it('should contain 2 movies', () => {
    expect(getRenderedComponent([getModel(), getModel(2, 'Other')]).toJSON()).toMatchSnapshot()
  })
})
