import search from 'tests/mocks/search.json'
import movie from 'tests/mocks/movie.json'

class Repository {
  async searchMoviesByQuery () {
    return search
  }
  async findMovieById () {
    return movie
  }
}

export default new Repository()
