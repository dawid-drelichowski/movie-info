import search from 'tests/mocks/search.json'
import movie from 'tests/mocks/movie.json'

class Movie {
  async searchByQuery () {
    const models = {...search}
    models.results = models.results.map((model) => {
      model.imagePath = model.backdrop_path
      delete model.backdrop_path
      return model
    })
  }
  async findById () {
    const model = {...movie}
    model.imagePath = model.poster_path
    model.averageVote = model.vote_average
    model.voteCount = model.vote_count
    delete model.poster_path
    delete model.vote_average
    delete model.vote_count
    return model
  }
}

export default new Movie()
