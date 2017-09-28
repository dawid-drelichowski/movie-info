import Mapper from 'mappers/MovieDetails'
import Model from 'models/MovieDetails'
import getModel, {mapProperties} from 'tests/mocks/helpers/models/movieDetails'
import movie from 'tests/mocks/movie.json'

describe('Movie details mapper', () => {
  it('static method map should return proper movie details model', () => {
    const expected = expect(Mapper.map(movie))
    expected.toBeInstanceOf(Model)
    expected.toEqual(getModel(mapProperties(movie)))
  })
})
