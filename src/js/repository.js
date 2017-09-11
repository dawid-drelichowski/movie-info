import config from 'config.json'

class Repository {
  async searchMoviesByQuery (query) {
    return this.fetch(`${config.movieDb.url}search/movie?api_key=${config.movieDb.apiKey}&query=${query}`)
  }
  async findMovieById (id) {
    return this.fetch(`${config.movieDb.url}movie/${id}?api_key=${config.movieDb.apiKey}`)
  }
  async fetch (url) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        return await response.json()
      }
      return false
    } catch (error) {
      console.log(error)
      return false
    }
  }
}

export default new Repository()
