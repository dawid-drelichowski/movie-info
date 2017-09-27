import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie'

export default class MovieList extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    service: PropTypes.object.isRequired,
    collection: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
  }
  static defaultProps = {
    collection: false
  }
  static renderNoMovie () {
    return <li className="list-group-item">
      <strong>There are no movies that matched your query.</strong>
    </li>
  }
  render () {
    return <div className="form-row mt-3">
      <ul className="col-12 list-group movies-list">
        {this.renderList()}
      </ul>
    </div>
  }
  renderList () {
    if (this.props.collection === false) {
      return ''
    }
    if (this.props.collection.length) {
      return this.props.collection.map(model => this.renderMovie(model))
    }
    return this.constructor.renderNoMovie()
  }
  renderMovie (model) {
    return <Movie key={model.id} config={this.props.config} service={this.props.service} model={model}/>
  }
}
