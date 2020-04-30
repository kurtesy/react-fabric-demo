import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ControlPanel from './controlPanel'
import Rect from './Rect'
import Circle from './Circle'
import Image from './Image'

const fabric = window.fabric

class DesignCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 600,
    height: 300,
  }

  canvas = new fabric.Canvas(this.c);

  state = {
    mousecursor: null,
    show: {rect: false,
      circle: false,
      image: false},
    backgroudImg: null
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas(this.c)
    this.canvas.freeDrawingBrush.width = 10;
    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = "#ff0000";
  }

  updatedCanvas = newCanvas => {
    this.canvas = newCanvas;
  }

  onControlChange = data => {
    this.canvas.freeDrawingBrush.width = data.brushsize;
    this.canvas.isDrawingMode = data.canDraw;
    this.canvas.freeDrawingBrush.color = data.brushcolor;
    this.canvas.renderAll();
    console.log('onControlChange', this.canvas.freeDrawingBrush);
  }

  showFigures = data => {
    this.setState({show:data});
  }

  addBackgroudImg = imagePath => {
    console.log(imagePath);
    this.setState({backgroudImg: imagePath})
    let canvas = this.canvas;
    fabric.Image.fromURL(imagePath, function(img) {
      // add background image
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
      });
    });
    this.canvas = canvas;
  }

  canvasToJson = event => {
      event.preventDefault()
      let jsonData = JSON.stringify(this.canvas.toJSON());
      navigator.clipboard.writeText(jsonData)
        .then(r => {alert('JSON Copied to clipboard')});
      console.log(jsonData);
  }

  clear = e => {
    const show = {rect: false,
      circle: false,
      image: false}
    e.preventDefault()
    this.canvas.clear();
    this.canvas.backgroundImage = null;
    this.canvas.renderAll();
    this.setState({show});
  }

  canvasStyle = {
    borderStyle: "solid",
    marginTop: "5px"
  }


  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        canvas: this.canvas,
        updatedCanvas: this.updatedCanvas,
      })
    })
    const { width, height } = this.props
    return (
      <Fragment>
        <ControlPanel
          canvas={this.canvas}
          onChange={this.onControlChange}
          showFigures={this.showFigures}
          addBackgroudImg={this.addBackgroudImg}/>

        <canvas ref={c => (this.c = c)} width={width} height={height} style={this.canvasStyle}/>
        {this.canvas && children}
        {this.state.show.rect && <Rect width={100} height={100} fill="blue" canvas={this.canvas}/>}
        {this.state.show.circle && <Circle radius={20} top={200} canvas={this.canvas}/>}
        {this.state.show.image && <Image url="https://http.cat/100" scale={0.2} top={100} canvas={this.canvas}/>}
        <br />
        <button
          onClick={e => this.canvasToJson(e)}>
          To JSON
        </button>
        <button
          onClick={e => this.clear(e)}
        >
          Clear Canvas
        </button>
      </Fragment>
    )
  }
}

export default DesignCanvas;
