import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MovieDetails from 'components/MovieDetails'

export default class Movie extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    service: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired
  }
  state = {detailsVisible: false, details: null}
  getImageUrl () {
    const config = this.props.config.movieDb.images
    return `${config.url}${config.size.small}`
  }
  toggleDetails = async () => {
    const state = {detailsVisible: false}
    if (this.state.detailsVisible) {
      this.setState(state)
      return
    }
    state.detailsVisible = true
    if (!this.state.details) {
      state.details = await this.props.service.findById(this.props.model.id)
    }
    this.setState(state)
  }
  render () {
    const model = this.props.model
    return <li onClick={this.toggleDetails} className="list-group-item list-group-item-action movie">
      <strong>{model.title}</strong>
      {model.imagePath ? this.renderImage() : ''}
      {this.state.detailsVisible ? this.renderMovieDetails() : ''}
    </li>
  }
  renderImage () {
    const model = this.props.model
    return <img
      src={`${this.getImageUrl()}${model.imagePath}`}
      alt={model.title}
      className="rounded float-right"
    />
  }
  renderMovieDetails () {
    return <MovieDetails config={this.props.config} model={this.state.details}/>
  }
}
