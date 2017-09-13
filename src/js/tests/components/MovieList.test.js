import React from 'react'
import MovieList from 'components/MovieList'
import renderer from 'react-test-renderer'
import config from 'tests/mocks/config.json'
import search from 'tests/mocks/search.json'
import repository from 'tests/mocks/repository'

describe('Movie list component', () => {
  function getRenderedComponent (movies) {
    return renderer.create(
      <MovieList config={config} repository={repository} movies={movies} />
    )
  }

  it('should be empty', () => {
    expect(getRenderedComponent({}).toJSON()).toMatchSnapshot()
  })

  it('should display "no results"', () => {
    const data = {...search}
    data.total_results = 0
    expect(getRenderedComponent(data).toJSON()).toMatchSnapshot()
  })

  it('should contain 4 movies', () => {
    expect(getRenderedComponent(search).toJSON()).toMatchSnapshot()
  })
})
