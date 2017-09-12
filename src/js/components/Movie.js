import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MovieDetails from 'components/MovieDetails'

export default class Movie extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    repository: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }
  state = {detailsVisible: false, details: null}
  toggleDetails = async () => {
    const state = {detailsVisible: false}

    if (this.state.detailsVisible) {
      this.setState(state)
      return
    }
    state.detailsVisible = true
    if (!this.state.details) {
      state.details = await this.props.repository.findMovieById(this.props.data.id)
    }
    this.setState(state)
  }
  render () {
    const config = this.props.config.movieDb.images,
      data = this.props.data
    return <li onClick={this.toggleDetails} className="list-group-item">
      <strong>{data.title}</strong>
      {data.poster_path ? <img
        src={`${config.url}${config.size.small}${data.poster_path}`}
        alt={data.title}
        className="rounded img-thumbnail float-right"
      /> : ''}
      {this.state.detailsVisible ? <MovieDetails config={this.props.config} details={this.state.details}/> : ''}
    </li>
  }
}
