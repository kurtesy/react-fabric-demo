import React, { Component } from 'react';
import ReconnectingWebSocket from "reconnectingwebsocket";
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
  socketOptions = {debug: true, reconnectInterval: 10000, maxReconnectAttempts: 5}
  client = new ReconnectingWebSocket(config.WS_URL, null, this.socketOptions);
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
      console.log('JSON Data sent');
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