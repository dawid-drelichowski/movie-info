export default class {
  config = {}
  constructor (config) {
    this.config = config
  }
  async searchMoviesByQuery (query) {
    const config = this.config.movieDb
    return this.fetch(`${config.url}search/movie?api_key=${config.apiKey}&query=${query}`)
  }
  async findMovieById (id) {
    const config = this.config.movieDb
    return this.fetch(`${config.url}movie/${id}?api_key=${config.apiKey}`)
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
