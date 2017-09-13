import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MovieDetails extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired
  }
  render () {
    const details = this.props.details
    return <article className="py-3">
      {details.poster_path ? this.renderImage() : ''}
      <dl>
        <dd className="float-left mb-0 mr-2">Rating:</dd>
        <dt>{details.vote_average} ({details.vote_count} votes)</dt>
        <dd className="float-left mb-0 mr-2">Genres:</dd>
        <dt>{details.genres.map(genre => genre.name).join(', ')}</dt>
        <dd className="float-left mb-0 mr-2">Release date:</dd>
        <dt>{details.release_date}</dt>
      </dl>
      <p className="text-justify m-0">{details.overview}</p>
    </article>
  }
  renderImage () {
    const config = this.props.config.movieDb.images
    return <img src={`${config.url}${config.size.big}${this.props.details.poster_path}`} className="float-left pr-2"/>
  }
}
