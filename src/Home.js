import React from 'react'
import { Button } from '@material-ui/core'
import config from './config/config.dev'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to {config.PROJECT} !</h1>
        <Button variant="contained" color="primary">
          Teacher WhiteBoard
        </Button>
        <Button variant="contained" color="primary">
          Student WhiteBoard
        </Button>
      </div>
    )
  }
}
export default Home;