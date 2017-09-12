import React from 'react'
import ReactDOM from 'react-dom'
import config from 'config.json'
import Repository from 'Repository'
import App from 'components/App'

const repository = new Repository(config)

ReactDOM.render(
  <App config={config} repository={repository}/>,
  document.getElementById('movie-info')
)
