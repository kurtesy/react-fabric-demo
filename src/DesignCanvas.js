import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import canvasStyle from './styles/canvas.module.css'
import Panel from './components/ControlPanel/panel'
import { AppBar, Toolbar, IconButton  } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogBox from './components/DialogBox'
import imageResizePosition from './components/Utils/Utility'
import spinnerStyles from './styles/spinner.module.css'
import BounceLoader from 'react-spinners/BounceLoader'

const fabric = window.fabric;
fabric.Object.prototype.selectable = false;

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
    cursor: 'pointer',
    backgroundImg: null,
    canvas: this.canvas,
    setSizeBackgroundImg: false,
    isLoading: false,
    client: null
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.canvas = new fabric.Canvas(this.c)
    console.log('screen.height', window.innerWidth, window.innerHeight)
    this.canvas.setWidth(window.innerWidth-140);
    this.canvas.setHeight(window.innerHeight-50);
    this.canvas.calcOffset();
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.freeDrawingBrush.width = 10;
    this.canvas.isDrawingMode = false;
    this.canvas.freeDrawingBrush.color = "#ff0000";
    this.canvas.renderAll();
    this.setState({canvas: this.canvas});
    this.interval = setInterval(() => this.sendCanvasData(), 10000);
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
    this.canvas.freeDrawingCursor = data.cursor;
    this.canvas.renderAll();
    console.log('onControlChange', this.canvas.getObjects());
  }

  addBackgroundImg = imagePath => {
    console.log(imagePath);
    this.setState({backgroundImg: imagePath, setSizeBackgroundImg: true})
  }

  backgroundImgResize = (size, position) => {
    let canvas = this.canvas;
    fabric.Image.fromURL(this.state.backgroundImg, function(img) {
      // add background image
      canvas = imageResizePosition(canvas, img, size, position);
    });
    this.canvas = canvas;
    this.setState({setSizeBackgroundImg: false})
  }

  canvasToJson = event => {
      event.preventDefault()
      let jsonData = JSON.stringify(this.canvas.toJSON());
      navigator.clipboard.writeText(jsonData)
        .then(r => {alert('JSON Copied to clipboard')});
      console.log(jsonData);
  }

  sendCanvasData = () => {
    let jsonData = JSON.stringify(this.canvas.toJSON());
    this.state.client.send(jsonData);
  }

  setClient = client => {
    this.setState({client});
  }

  setLoading = status => {
    this.setState({isLoading: status})
  }

  clear = e => {
    e.preventDefault()
    this.canvas.clear();
    this.canvas.backgroundImage = null;
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.renderAll();
  }


  render() {
    // const children = React.Children.map(this.state.children, child => {
    //   return React.cloneElement( child, {
    //     canvas: this.canvas,
    //     updateCanvas: this.updateCanvas,
    //   })
    // })
    const { width, height } = this.props
    return (
      <Fragment>
        <MuiThemeProvider>
        <AppBar position="static" className={canvasStyle.topNav} showMenuIconButton={false}>
          <div className={canvasStyle.title}>
            The AlteVision Canvas App
          </div>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </MuiThemeProvider>
        <div className={canvasStyle.wrapper}>
          <canvas ref={c => (this.c = c)} width={width} height={height} className={canvasStyle.canvasStyle}/>
        </div>
        {this.state.setSizeBackgroundImg && 
          <DialogBox onClose={this.backgroundImgResize} selectedValue={'osc'} open={this.state.setSizeBackgroundImg} />}
        {this.state.isLoading && <div className={spinnerStyles.loaderDiv}>
          <div className={spinnerStyles.loaderPosition}>
            <BounceLoader
              style={spinnerStyles.loader}
              size={60}
              color={"#2fffa8"}
              loading={this.state.loading}
            />
            Loading...
          </div>
        </div>}
        <Panel
          canvas={this.state.canvas}
          onChange={this.onControlChange}
          updateCanvas={this.updateCanvas}
          addBackgroundImg={this.addBackgroundImg}
          setLoading={this.setLoading}
          setClient={this.setClient}
        />
      </Fragment>
    )
  }
}

export default DesignCanvas;
