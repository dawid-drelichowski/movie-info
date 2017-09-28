import Repository from 'repositories/Movie'
import config from 'tests/mocks/config.json'

describe('Movie repository', () => {
  function getRepository (config) {
    return new Repository(config)
  }

  it('method getSearchByQueryUrl should return proper url', () => {
    expect(getRepository(config).getSearchByQueryUrl('title'))
      .toBe('https://mock.api/search/movie?api_key=mock_api_key&query=title')
  })

  it('method getFindByIdUrl should return proper url', () => {
    expect(getRepository(config).getFindByIdUrl(1))
      .toBe('https://mock.api/movie/1?api_key=mock_api_key')
  })
})
