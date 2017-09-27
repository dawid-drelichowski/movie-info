export default class {
  config = {}
  constructor (config) {
    this.config = config
  }
  async searchByQuery (query) {
    if (query) {
      return this.fetch(this.getSearchByQueryUrl(query))
    }
    return false
  }
  async findById (id) {
    if (id) {
      return this.fetch(this.getFindByIdUrl(id))
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
  getSearchByQueryUrl (query) {
    const config = this.getMovieDbConfig()
    return `${config.url}search/movie?api_key=${config.apiKey}&query=${query}`
  }
  getFindByIdUrl (id) {
    const config = this.getMovieDbConfig()
    return `${config.url}movie/${id}?api_key=${config.apiKey}`
  }
  getMovieDbConfig () {
    return this.config.movieDb
  }
}
