import React from 'react'
import ReactDOM from 'react-dom'
import config from 'config.json'
import Repository from 'repositories/Movie'
import Service from 'services/Movie'
import App from 'components/App'

const service = new Service(new Repository(config))

ReactDOM.render(
  <App config={config} service={service}/>,
  document.getElementById('movie-info')
)
