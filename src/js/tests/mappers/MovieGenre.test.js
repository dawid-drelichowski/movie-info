import Mapper from 'mappers/MovieGenre'
import Model from 'models/MovieGenre'
import getModel from 'tests/mocks/helpers/models/movieGenre'
import movie from 'tests/mocks/movie.json'

describe('Movie genre mapper', () => {
  it('static method map should return proper movie genre model', () => {
    const genre = movie.genres[0],
      expected = expect(Mapper.map(genre))
    expected.toBeInstanceOf(Model)
    expected.toEqual(getModel(genre))
  })

  it('static method mapCollection should return proper movie model collection', () => {
    const count = 3,
      data = movie.genres.slice(0, 3),
      models = data.map(item => getModel(item)),
      expected = expect(Mapper.mapCollection(data))
    expected.toHaveLength(count)
    expected.toEqual(models)
  })
})
