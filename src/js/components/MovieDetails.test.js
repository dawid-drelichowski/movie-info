import React from 'react'
import MovieDetails from 'components/MovieDetails'
import renderer from 'react-test-renderer'

describe('Movie details component', () => {
  const sharedData = {
    vote_average: 6.4,
    vote_count: 4976,
    genres: [
      {
        id: 10751,
        name: 'Family'
      },
      {
        id: 16,
        name: 'Animation'
      }
    ],
    release_date: '2015-06-17',
    overview: 'Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill...'
  }

  function getRenderedComponent (data) {
    return renderer.create(
      <MovieDetails data={data} />
    )
  }

  it('shouldn\'t have image', () => {
    expect(getRenderedComponent(sharedData).toJSON()).toMatchSnapshot()
  })

  it('should have image', () => {
    expect(getRenderedComponent({...sharedData, poster_path: '/q0R4crx2SehcEEQEkYObktdeFy.jpg'}).toJSON()).toMatchSnapshot()
  })
})
