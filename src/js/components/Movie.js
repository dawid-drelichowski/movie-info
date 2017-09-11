import React, {Component} from 'react'
import PropTypes from 'prop-types'
import config from 'config.json'
import repository from 'repository'
import MovieDetails from 'components/MovieDetails'

export default class Movie extends Component {
  static propTypes = {
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
      state.details = await repository.findMovieById(this.props.data.id)
    }
    this.setState(state)
  }
  render () {
    const data = this.props.data
    return <li onClick={this.toggleDetails}>
      <strong>{data.title}</strong>
      {data.poster_path ? <img src={`${config.movieDb.images.url}${config.movieDb.images.size.small}${data.poster_path}`}/> : ''}
      {this.state.detailsVisible ? <MovieDetails data={this.state.details}/> : ''}
    </li>
  }
}
