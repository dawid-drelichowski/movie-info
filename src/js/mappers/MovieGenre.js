import Abstract from 'mappers/Abstract'
import Genre from 'models/MovieGenre'

export default class extends Abstract {
  static mapping = new Map([
    ['id', 'id'],
    ['name', 'name']
  ])
  static map (data) {
    return this.performMapping(data, new Genre())
  }
}
