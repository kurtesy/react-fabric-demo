import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import canvasStyle from './styles/canvas.module.css'
import panelStyle from './styles/panel.module.css'
import ControlPanel from './controlPanel'

const fabric = window.fabric;

class DesignCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 1200,
    height: 800,
  }

  canvas = new fabric.Canvas(this.c);

  state = {
    mousecursor: null,
    backgroudImg: null,
    canvas: this.canvas
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.canvas = new fabric.Canvas(this.c)
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.freeDrawingBrush.width = 10;
    this.canvas.isDrawingMode = false;
    this.canvas.freeDrawingBrush.color = "#ff0000";
    this.canvas.renderAll();
    this.setState({canvas: this.canvas});
  }

  updateCanvas = newCanvas => {
    this.canvas = newCanvas;
    this.canvas.renderAll();
    this.setState({canvas: newCanvas});
    console.log('newCanvas', newCanvas)
    console.log(' this.canvas',  this.canvas);
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

  addBackgroundImg = imagePath => {
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
    e.preventDefault()
    this.canvas.clear();
    this.canvas.backgroundImage = null;
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.renderAll();
  }


  render() {
    const children = React.Children.map(this.state.children, child => {
      return React.cloneElement(child, {
        canvas: this.canvas,
        updateCanvas: this.updateCanvas,
      })
    })
    const { width, height } = this.props
    return (
      <Fragment>
        <table>
          <tbody>
          <tr>
            <td>
            <canvas ref={c => (this.c = c)} width={width} height={height} className={canvasStyle.canvasStyle}/>
            {this.canvas && children}
            <br />
              </td>
            <td className={panelStyle.rightPanel}>
              <ControlPanel
                canvas={this.state.canvas}
                onChange={this.onControlChange}
                updateCanvas={this.updateCanvas}
                addBackgroundImg={this.addBackgroundImg}/>
            <button
              onClick={e => this.canvasToJson(e)}>
              To JSON
            </button>
            <button
              onClick={e => this.clear(e)}>
              Clear Canvas
            </button>
              </td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default DesignCanvas;
