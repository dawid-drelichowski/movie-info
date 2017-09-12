export default class {
  config = {}
  constructor (config) {
    this.config = config
  }
  async searchMoviesByQuery (query) {
    const config = this.config.movieDb
    if (query) {
      return this.fetch(`${config.url}search/movie?api_key=${config.apiKey}&query=${query}`)
    }
    return false
  }
  async findMovieById (id) {
    const config = this.config.movieDb
    if (id) {
      return this.fetch(`${config.url}movie/${id}?api_key=${config.apiKey}`)
    }
    return false
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
