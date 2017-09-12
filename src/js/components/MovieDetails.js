import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class MovieDetails extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired
  }
  render () {
    const config = this.props.config.movieDb.images,
      details = this.props.details
    return <article>
      <dl>
        <dd>Rating:</dd>
        <dt>{details.vote_average} ({details.vote_count} votes)</dt>
        <dd>Genres:</dd>
        <dt>{details.genres.map(genre => genre.name).join(', ')}</dt>
        <dd>Release date:</dd>
        <dt>{details.release_date}</dt>
      </dl>
      {details.poster_path ? <img src={`${config.url}${config.size.big}${details.poster_path}`}/> : ''}
      <p>{details.overview}</p>
    </article>
  }
}
