import React from 'react'
import MovieDetails from 'components/MovieDetails'
import renderer from 'react-test-renderer'
import config from 'tests/mocks/config.json'
import movie from 'tests/mocks/movie.json'

describe('Movie details component', () => {
  function getRenderedComponent (details) {
    return renderer.create(
      <MovieDetails config={config} details={details} />
    )
  }

  it('shouldn\'t have image', () => {
    expect(getRenderedComponent({...movie, poster_path: undefined}).toJSON()).toMatchSnapshot()
  })

  it('should have image', () => {
    expect(getRenderedComponent(movie).toJSON()).toMatchSnapshot()
  })
})
