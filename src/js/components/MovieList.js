import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie'

export default class MovieList extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
    movies: PropTypes.array
  }
  static defaultProps = {
    movies: []
  }
  render () {
    return <ul>
      {this.props.movies.map(movie => {
        return <Movie key={movie.id} config={this.props.config} repository={this.props.repository} data={movie}/>
      })}
    </ul>
  }
}
