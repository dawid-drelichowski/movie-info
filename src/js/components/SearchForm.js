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
      <div className="form-row">
        <div className="col-7 col-sm-8 col-md-10 col-xl-11">
          <input
            type="search"
            value={this.state.query}
            placeholder="Enter movie title"
            onChange={this.changeQuery}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-5 col-sm-4 col-md-2 col-xl-1">
          <button className="btn btn-lg btn-success">Search!</button>
        </div>
      </div>
    </form>
  }
}
