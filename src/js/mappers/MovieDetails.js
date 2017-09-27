import Abstract from 'mappers/Abstract'
import Details from 'models/MovieDetails'
import GenreMapper from 'mappers/MovieGenre'

export default class extends Abstract {
  static mapping = new Map([
    ['id', 'id'],
    ['title', 'title'],
    ['imagePath', 'poster_path'],
    ['averageVote', 'vote_average'],
    ['voteCount', 'vote_count'],
    ['releaseDate', 'release_date'],
    ['overview', 'overview']
  ])
  static map (data) {
    const model = new Details()
    if (data.genres.length) {
      model.genres = GenreMapper.mapCollection(data.genres)
    }
    this.performMapping(data, model)
    return model
  }
}
