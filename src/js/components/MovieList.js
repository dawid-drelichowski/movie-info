import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie'

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }
  static defaultProps = {
    movies: []
  }
  render () {
    return <ul>
      {this.props.movies.map(movie => <Movie key={movie.id} data={movie}/>)}
    </ul>
  }
}
