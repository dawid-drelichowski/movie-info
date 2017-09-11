import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  static defaultProps = {
    onSubmit: () => {}
  }
  state = {query: ''}
  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.query)
  }
  changeQuery = event => this.setState({query: event.target.value})
  render () {
    return <form onSubmit={this.onSubmit}>
      <label htmlFor="movie-name">Search</label>
      <input type="search" value={this.state.query} id="movie-name" placeholder="Insert movie name" onChange={this.changeQuery} />
      <button>Search!</button>
    </form>
  }
}
