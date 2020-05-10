import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FileSelector from '../Image/ImagePicker'
import { Button } from '@material-ui/core';
import WebSocketService from '../../services/webSocketService'
import buttonStyles from '../../styles/button.module.css'

class BackgroundControlPanel extends Component {
  static propTypes = {
    selectImage: PropTypes.func,
    setLoading: PropTypes.func,
    canvas: PropTypes.object.isRequired
  }
  static defaultProps = {
    selectImage: function() {},
    setLoading: function() {},
    canvas: null
  }

  state = {
    wsConnect: false
  }

  canvasToJson = event => {
    event.preventDefault()
    let jsonData = JSON.stringify(this.props.canvas.toJSON());
    navigator.clipboard.writeText(jsonData)
      .then(r => {alert('JSON Copied to clipboard')});
    console.log(jsonData);
  }

  clear = e => {
    e.preventDefault()
    this.props.canvas.clear();
    this.props.canvas.backgroundImage = null;
    this.props.canvas.backgroundColor = "#ffffff";
    this.props.canvas.renderAll();
  }

  setLoading = status => {
    this.setState({isLoading: status})
  }

  connectToWS = e => {
    e.preventDefault();
    this.setState({wsConnect: true})
  }

  render() {
    return (
      <Fragment>
          <FileSelector selectImage={this.props.selectImage} setLoading={this.props.setLoading}/>
          <Button className={buttonStyles.panelBtn} size={'small'} variant="contained" color="default"
                  onClick={e => this.props.updateImage}>
            Resize Image
          </Button>
        <br />
          <Button className={buttonStyles.panelBtn} size={'small'} variant="contained" color="default"
            onClick={e => this.canvasToJson(e)}>
            To JSON
          </Button>
        <br />
          <Button variant="contained" color="default" size={'small'} className={buttonStyles.panelBtn}
            onClick={e => this.clear(e)}>
            Clear Canvas
          </Button>
        <br />
          <Button variant="contained" color="default" size={'small'} className={buttonStyles.panelBtn}
                  onClick={e => this.connectToWS(e)}>
            Connect to WS
          </Button>
        <WebSocketService setClient={this.props.setClient} sendMessage={function(msg) {}}/>
    {/*//     <div>*/}
    {/*//     <label form="images">Choose a background image:</label>*/}
    {/*//     <canvas id="the-canvas" style={{ border: '1px solid black', display: 'none' }}/>*/}
    {/*//     <select id="images" onChange={val => this.props.selectImage(val)}>*/}
    {/*//       <option value=""/>*/}
    {/*//       <option value="https://i.imgur.com/MrGY5EL.jpg">Grassland</option>*/}
    {/*//       <option value="https://i.imgur.com/EVOFpNF.jpg">Snow</option>*/}
    {/*//       <option value="https://i.imgur.com/pSJwd0s.jpg">Green Canvas</option>*/}
    {/*//     </select>*/}
    {/*//*/}
    {/*//     <label form="imagesPdf">Choose a image from pdf:</label>*/}
    {/*//     <canvas id="the-canvas" style={{ border: '1px solid black', display: 'none' }}/>*/}
    {/*//     <select id="imagesPdf" onChange={val => this.props.selectImage(val)}>*/}
    {/*//       <option value='-1'>No Page Selected</option>*/}
    {/*//       <option value='1'>Page-1</option>*/}
    {/*//       <option value='2'>Page-2</option>*/}
    {/*//       <option value='3'>Page-3</option>*/}
    {/*//       <option value='4'>Page-4</option>*/}
    {/*//     </select>*/}
    {/*// </div>*/}
      </Fragment>
    )
  }
}

export default BackgroundControlPanel || null;
