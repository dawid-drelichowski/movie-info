import search from 'tests/mocks/search.json'
import movie from 'tests/mocks/movie.json'

class Movie {
  async searchByQuery () {
    return search
  }
  async findById () {
    return movie
  }
}

export default new Movie()
