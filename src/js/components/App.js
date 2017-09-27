import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Service from 'services/Movie'
import SearchForm from 'components/SearchForm'
import MovieList from 'components/MovieList'

export default class App extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    service: PropTypes.instanceOf(Service).isRequired
  }
  state = {movies: false}
  searchMovies = async query => {
    const movies = await this.props.service.searchByQuery(query)
    this.setState({movies})
  }
  render () {
    return <div>
      <SearchForm onSubmit={this.searchMovies}/>
      <MovieList config={this.props.config} service={this.props.service} collection={this.state.movies}/>
    </div>
  }
}
