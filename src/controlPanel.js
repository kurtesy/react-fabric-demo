import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSquareFull, FaCircle, FaFileImage, FaPencilAlt, FaEraser, FaICursor, FaSlash } from 'react-icons/fa';
import styles from './styles/button.module.css';
import panelStyles from './styles/panel.module.css';
import pdfjs from 'pdfjs-dist';
import TextBox from './components/TextBox'
import Rect from './components/Rect'
import EraserBrush from './components/Eraser'
import BackgroundControlPanel from './components/BackgroudSelectionCP'

// const pdfjsLib = window['pdfjs-dist/build/pdf'];
const fabric = window.fabric;

class ControlPanel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    updateCanvas: PropTypes.func,
    addBackgroundImg: PropTypes.func
  }
  static defaultProps = {
    onChange: function () {},
    showFigures: function () {}
  }

  state = {
    brushsize: 10,
    canDraw: false,
    brushcolor:"#ff0000",
    backgroundImg: null,
    addTextBox: false,
    eraserActive: false
  }

  componentMap = {
    'textBox': TextBox(),
    'rect': Rect
  }

  componentDidMount () {
    console.log('CPPP',  this.props.canvas);
    // let selectedImg = document.getElementById('images').value;
    // this.props.addBackgroundImg(selectedImg);
    // this.setState({backgroundImg: selectedImg});
  }

  resetBrush = () => {
    if (this.state.eraserActive) {
      console.log('resetBrush');
      this.props.canvas.freeDrawingBrush = new fabric.PencilBrush();
      this.props.canvas.freeDrawingBrush.width = this.state.brushsize;
      this.props.canvas.isDrawingMode = false;
      this.props.canvas.freeDrawingBrush.color = this.state.brushcolor;
      this.setState({eraserActive: false});
    }
  }

  brushSizeChange = (event, size) => {
    event.preventDefault();
    console.log('brushSizeChange');
    this.resetBrush();
    this.setState({ brushsize: size }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  canUseBrush = event => {
    console.log('canUseBrush');
    this.resetBrush();
    this.setState({ canDraw: !this.state.canDraw }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  brushColorChange = event => {
    console.log('brushColorChange');
    this.resetBrush();
    this.setState({ brushcolor: event.target.value }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  eraser = (e) => {
    e.preventDefault();
    console.log('eraser');
    this.props.canvas.isDrawingMode = true;
    const eraserBrush = new EraserBrush(this.props.canvas);
    eraserBrush.width = 10;
    eraserBrush.color = "#ffffff";
    this.props.canvas.freeDrawingBrush = eraserBrush;
    this.props.onChange(this.state)
    console.log(this.props.canvas.freeDrawingBrush);
    this.setState({eraserActive: true})
  }

  renderFigure = event => {
    let id = event.target.id
    console.log('Figure:', id)
  }


  selectImage = img => {
    // let selectedImg = document.getElementById('images').value;
    // let pageNo = document.getElementById('imagesPdf').value;
    // pageNo = parseInt(pageNo);
    // if ( pageNo !== -1)
    // {
    //   this.readPDF(pageNo).then(img => {
    //     this.props.addBackgroundImg(img);
    //     this.setState({backgroundImg: img});
    //   });
    // }
    let selectedImg = img;
    console.log(selectedImg);
    this.props.addBackgroundImg(selectedImg);
    this.setState({backgroundImg: selectedImg});
  }

  readPDF = (pageNo) => {
    let pdfImage;
    pdfjs.disableWorker = true;
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    let testUrl= "https://gahp.net/wp-content/uploads/2017/09/sample.pdf"
    let corsUrl = 'https://cors-anywhere.herokuapp.com/'
    return pdfjs.getDocument({ url: corsUrl+testUrl }).then(function getPdfHelloWorld(pdf) {
      return pdf.getPage(pageNo).then(function getPageHelloWorld(page) {
        const scale = 1.5
        const viewport = page.getViewport(scale)
        let canvas = document.getElementById('the-canvas');
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let task = page.render({canvasContext: context, viewport: viewport})
        return task.promise.then(function(){
          pdfImage = canvas.toDataURL('image/jpeg');
          return pdfImage;
        });
      });
    });
  }


  addElement = (e, element) => {
    e.preventDefault();
    const canvasElement = this.componentMap[element];
    console.log('addElement', this.props.canvas);
    this.props.canvas.add(canvasElement);
    this.props.canvas.setActiveObject(canvasElement);
    this.props.canvas.isDrawingMode = false;
    this.props.canvas.renderAll();
    this.props.updateCanvas(this.props.canvas);
  }

  render() {
    return (
      <div className={panelStyles.controlPanel}>
        <div className={panelStyles.boxTitle}>
          Base Tool Set
        </div>
        <div className={panelStyles.box}>
          <button title="Pencil Tool" className={styles.btn} id="canDraw" onClick={this.canUseBrush}> <FaPencilAlt />
          </button>
          <button disabled={true} title="Eraser" className={styles.btn} id="erase" onClick={this.eraser}> <FaEraser />
          </button>
          <button title="Text Box" className={styles.btn} id="textBox" onClick={event => {this.addElement(event,'textBox')}}><FaICursor />
          </button>
          <button disabled={true} title="Draw Line" className={styles.btn} id="line" onClick={event => {this.addElement(event,'line')}}><FaSlash />
          </button>
        </div>
        <div className={panelStyles.boxTitle}>
          Color Pallet
        </div>
        <div className={panelStyles.box}>
          <input title="Color Selector" id="color" type="color" defaultValue="#ff0000"
                          onChange={this.brushColorChange}/>
        </div>
        <div className={panelStyles.boxTitle}>
          Brush Size
        </div>
        <div className={panelStyles.box}>
          <button title="brushSize1" id="brushSize1" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,2)}><FaCircle style={{fontSize: 2}}/>
          </button>
          <button title="brushSize2" id="brushSize2" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,5)}><FaCircle style={{fontSize: 5}}/>
          </button>
          <button title="brushSize3" id="brushSize3" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,10)}><FaCircle style={{fontSize: 10}}/>
          </button>
          <button title="brushSize4" id="brushSize4" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,15)}><FaCircle style={{fontSize: 15}}/>
          </button>
          <button title="brushSize5" id="brushSize5" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,20)}><FaCircle style={{fontSize: 20}}/>
          </button>
          <button title="brushSize6" id="brushSize6" className={styles.brush}
                  onClick={event => this.brushSizeChange(event,25)}><FaCircle style={{fontSize: 25}}/>
          </button>

        </div>
        <div className={panelStyles.boxTitle}>
          Basic Figures
        </div>
        <div className={panelStyles.box}>
          <button title="Add Rectangle" id="rect" className={styles.btn} onClick={this.renderFigure}><FaSquareFull />
          </button>
          <button title="Add Circle" id="circle" className={styles.btn} onClick={this.renderFigure}><FaCircle />
          </button>
          <button title="Add PNG" id="image" className={styles.btn} onClick={this.renderFigure}><FaFileImage />
          </button>
        </div>
        <br/>
        <BackgroundControlPanel
        selectImage={this.selectImage}
        />
      </div>
    )
  }
}

export default ControlPanel;
