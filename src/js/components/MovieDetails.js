import React, {Component} from 'react'
import PropTypes from 'prop-types'
import config from 'config.json'

export default class MovieDetails extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render () {
    const data = this.props.data
    return <article>
      <dl>
        <dd>Rating:</dd>
        <dt>{data.vote_average} ({data.vote_count} votes)</dt>
        <dd>Genres:</dd>
        <dt>{data.genres.map(genre => genre.name).join(', ')}</dt>
        <dd>Release date:</dd>
        <dt>{data.release_date}</dt>
      </dl>
      {data.poster_path ? <img src={`${config.movieDb.images.url}${config.movieDb.images.size.big}${data.poster_path}`}/> : ''}
      <p>{data.overview}</p>
    </article>
  }
}
