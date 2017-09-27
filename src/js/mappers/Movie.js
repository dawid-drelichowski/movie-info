import Abstract from 'mappers/Abstract'
import Movie from 'models/Movie'

export default class extends Abstract {
  static mapping = new Map([
    ['id', 'id'],
    ['title', 'title'],
    ['imagePath', 'backdrop_path']
  ])
  static map (data) {
    return this.performMapping(data, new Movie())
  }
}
