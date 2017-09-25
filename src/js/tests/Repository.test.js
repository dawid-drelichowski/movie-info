import Repository from 'Repository'
import config from 'tests/mocks/config.json'

describe('Repository', () => {
  function getRepository (config) {
    return new Repository(config)
  }

  it('method getSearchMoviesByQueryUrl should return proper url', () => {
    expect(getRepository(config).getSearchMoviesByQueryUrl('square'))
      .toBe('https://mock.api/search/movie?api_key=mock_api_key&query=square')
  })

  it('method getFindMovieByIdUrl should return proper url', () => {
    expect(getRepository(config).getFindMovieByIdUrl(12))
      .toBe('https://mock.api/movie/12?api_key=mock_api_key')
  })
})
