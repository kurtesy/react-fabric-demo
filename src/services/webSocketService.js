import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import PropTypes from 'prop-types';
import config from '../config/config.dev'

class WebSocketService extends Component {
  static propTypes = {
    setClient: PropTypes.func.isRequired,
    sendMessage: PropTypes.func
  }
  state = {
    status: 'Pending...',
    messages: [],
    sendMessage: function() {}
  }
  client = new W3CWebSocket(config.WS_URL);
  componentDidMount() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
      this.setState({status: 'connected'})
    };
    this.client.onmessage = (message) => {
      let newMessage = message.data
      // newMessage.push(message.data);
      this.setState({messages: newMessage})
      this.setState({status: 'Message:'+JSON.stringify(newMessage)+' received'})
      console.log(this.state.messages);
      this.props.sendMessage(newMessage);
    };
    this.props.setClient(this.client);
  }

  render() {
    return (
      <div style={{display: 'none'}}>
        Connection status:
        {this.state.status}
      </div>
    );
  }
}

export default WebSocketService;