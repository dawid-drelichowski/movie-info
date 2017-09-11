import React, {Component} from 'react'
import SearchForm from 'components/SearchForm'
import MovieList from 'components/MovieList'
import repository from 'repository'

export default class App extends Component {
  state = {movies: []}
  search = async query => {
    const result = await repository.searchMoviesByQuery(query)
    if (result && result.results) {
      this.setState({movies: result.results})
    }
  }
  render () {
    return <div>
      <SearchForm onSubmit={this.search}/>
      <MovieList movies={this.state.movies}/>
    </div>
  }
}
