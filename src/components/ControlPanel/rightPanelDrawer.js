import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FileSelector from '../Image/ImagePicker'
import { Button } from '@material-ui/core';
import WebSocketService from '../../services/webSocketService'

class BackgroundControlPanel extends Component {
  static propTypes = {
    resizeImage: PropTypes.func,
    setLoading: PropTypes.func,
    canvas: PropTypes.object.isRequired
  }
  static defaultProps = {
    resizeImage: function() {},
    setLoading: function() {},
    canvas: null
  }

  state = {
    wsConnect: false,
    client: null
  }

  setLoading = status => {
    this.setState({isLoading: status})
  }

  connectToWS = e => {
    e.preventDefault();
    this.setState({wsConnect: true})
  }

  setClient = client => {
    this.setState({client});
    console.log(client);
  }

  render() {
    return (
      <Fragment>
        <Button variant="contained" color="default"
                onClick={e => this.connectToWS(e)}>
          Connect to WS
        </Button>
        {this.state.wsConnect && <WebSocketService setClient={this.setClient}/>}
      </Fragment>
    )
  }
}

export default BackgroundControlPanel || null;
