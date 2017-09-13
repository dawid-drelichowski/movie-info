import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie'

export default class MovieList extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
    movies: PropTypes.object
  }
  static defaultProps = {
    movies: {}
  }
  render () {
    return <div className="form-row mt-3">
      <ul className="col-12 list-group movies-list">
        {this.renderList()}
      </ul>
    </div>
  }
  renderList () {
    if (!Object.keys(this.props.movies).length) {
      return ''
    }
    if (this.props.movies.total_results > 0) {
      return this.props.movies.results.map(movie => this.renderMovie(movie))
    }
    return this.renderNoMovie()
  }
  renderMovie (movie) {
    return <Movie key={movie.id} config={this.props.config} repository={this.props.repository} data={movie}/>
  }
  renderNoMovie () {
    return <li className="list-group-item">
      <strong>There are no movies that matched your query.</strong>
    </li>
  }
}
