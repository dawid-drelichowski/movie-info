import Mapper from 'mappers/Movie'
import DetailsMapper from 'mappers/MovieDetails'

export default class {
  repository
  constructor (repository) {
    this.repository = repository
  }
  async searchByQuery (query) {
    const data = await this.repository.searchByQuery(query)
    if (data && data.results) {
      return Mapper.mapCollection(data.results)
    }
    return false
  }
  async findById (id) {
    const data = await this.repository.findById(id)
    if (data) {
      return DetailsMapper.map(data)
    }
    return false
  }
}
