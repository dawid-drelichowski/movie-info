import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Repository from 'Repository'
import SearchForm from 'components/SearchForm'
import MovieList from 'components/MovieList'

export default class App extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    repository: PropTypes.instanceOf(Repository).isRequired
  }
  state = {movies: []}
  searchMovies = async query => {
    const result = await this.props.repository.searchMoviesByQuery(query)
    if (result && result.results) {
      this.setState({movies: result.results})
    }
  }
  render () {
    return <div>
      <SearchForm onSubmit={this.searchMovies}/>
      <MovieList config={this.props.config} repository={this.props.repository} movies={this.state.movies}/>
    </div>
  }
}
