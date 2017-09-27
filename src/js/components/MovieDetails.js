import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MovieDetails extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired
  }
  getImageUrl () {
    const config = this.props.config.movieDb.images
    return `${config.url}${config.size.big}`
  }
  render () {
    const model = this.props.model
    return <article className="py-3">
      {model.imagePath ? this.renderImage() : ''}
      <dl>
        <dd className="float-left mb-0 mr-2">Rating:</dd>
        <dt>{model.averageVote} ({model.voteCount} votes)</dt>
        <dd className="float-left mb-0 mr-2">Genres:</dd>
        <dt>{model.genres.map(genre => genre.name).join(', ')}</dt>
        <dd className="float-left mb-0 mr-2">Release date:</dd>
        <dt>{model.releaseDate}</dt>
      </dl>
      <p className="text-justify m-0">{model.overview}</p>
    </article>
  }
  renderImage () {
    const model = this.props.model
    return <img
      src={`${this.getImageUrl()}${this.props.model.imagePath}`}
      alt={model.title}
      className="float-left pr-2"/>
  }
}
