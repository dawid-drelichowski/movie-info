import MovieRepository from 'repositories/Movie'
import config from 'tests/mocks/config.json'

describe('Repository', () => {
  function getRepository (config) {
    return new MovieRepository(config)
  }

  it('method getSearchMoviesByQueryUrl should return proper url', () => {
    expect(getRepository(config).getSearchByQueryUrl('title'))
      .toBe('https://mock.api/search/movie?api_key=mock_api_key&query=title')
  })

  it('method getFindMovieByIdUrl should return proper url', () => {
    expect(getRepository(config).getFindByIdUrl(1))
      .toBe('https://mock.api/movie/1?api_key=mock_api_key')
  })
})
