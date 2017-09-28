import Mapper from 'mappers/Movie'
import Model from 'models/Movie'
import getModel, {mapProperties} from 'tests/mocks/helpers/models/movie'
import search from 'tests/mocks/search.json'

describe('Movie mapper', () => {
  it('static method map should return proper movie model', () => {
    const data = search.results[0],
      expected = expect(Mapper.map(data))
    expected.toBeInstanceOf(Model)
    expected.toEqual(getModel(mapProperties(data)))
  })

  it('static method mapCollection should return proper movie model collection', () => {
    const count = 3,
      data = search.results.slice(0, 3),
      models = data.map(item => getModel(mapProperties(item))),
      expected = expect(Mapper.mapCollection(data))
    expected.toHaveLength(count)
    expected.toEqual(models)
  })
})
