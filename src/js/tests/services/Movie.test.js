import Service from 'services/Movie'
import repository from 'tests/mocks/repositories/movie'
import getMovie, {mapProperties as mapMovie} from 'tests/mocks/helpers/models/movie'
import getDetails, {mapProperties as mapDetails} from 'tests/mocks/helpers/models/movieDetails'
import MovieDetails from 'models/MovieDetails'
import search from 'tests/mocks/search.json'
import movie from 'tests/mocks/movie.json'

describe('Movie service', () => {
  function getService () {
    return new Service(repository)
  }

  it('method searchByQuery should return proper movie collection', async () => {
    expect.assertions(2)
    const expected = expect(await getService().searchByQuery('title'))
    expected.toHaveLength(search.results.length)
    expected.toEqual(search.results.map(movie => getMovie(mapMovie(movie))))
  })

  it('method findById should return proper movie details model', async () => {
    expect.assertions(2)
    const expected = expect(await getService().findById(1))
    expected.toBeInstanceOf(MovieDetails)
    expected.toEqual(getDetails(mapDetails(movie)))
  })
})
