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

  state = {
    canvas: null,
    mousecursor: null,
    show: {rect: false,
    circle: false,
    image: false}
  }

  componentDidMount() {
    const canvas = new fabric.Canvas(this.c)
    canvas.freeDrawingBrush.width = 10;
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = "#ff0000";
    this.setState({ canvas })
  }

  updatedCanvas = newCanvas => {
    if (typeof newCanvas !== 'undefined') {
      this.setState({ canvas: newCanvas })
      console.log('Updating canvas to', newCanvas)
    }
  }

  onControlChange = data => {
    let canvas = this.state.canvas;
    if (canvas) {
      console.log(data);
      canvas.freeDrawingBrush.width = data.brushSize;
      canvas.isDrawingMode = data.canDraw;
      canvas.freeDrawingBrush.color = data.brushcolor;
      this.setState({canvas});
    }
  }

  showFigures = data => {
    this.setState({show:data});
  }

  clear = e =>
    {
      const show = {rect: false,
        circle: false,
        image: false}
      e.preventDefault()
      this.state.canvas.clear();
      this.setState({show});
    }

  canvasStyle = {
    borderStyle: "solid",
    marginTop: "5px"
  }


  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        canvas: this.state.canvas,
        updatedCanvas: this.updatedCanvas,
      })
    })
    const { width, height } = this.props
    return (
      <Fragment>
        <ControlPanel 
          canvas={this.state.canvas} 
          onChange={this.onControlChange}
          showFigures={this.showFigures}/>
        
        <canvas ref={c => (this.c = c)} width={width} height={height} style={this.canvasStyle}/>
        {this.state.canvas && children}
        {this.state.show.rect && <Rect width={100} height={100} fill="blue" canvas={this.state.canvas}/>}
        {this.state.show.circle && <Circle radius={20} top={200} canvas={this.state.canvas}/>}
        {this.state.show.image && <Image url="https://http.cat/100" scale={0.2} top={100} canvas={this.state.canvas}/>}
        <br />
        <button
          onClick={e => {
            e.preventDefault()
            let jsonData = this.state.canvas.toJSON();
            console.log(JSON.stringify(jsonData));
          }}
        >
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

export default DesignCanvas
