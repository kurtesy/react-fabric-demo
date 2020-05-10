import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types'
import { FaSquareFull, FaCircle, FaFileImage, FaPencilAlt, FaEraser, FaICursor,
          FaSlash, FaMousePointer, FaRegWindowClose, FaUndo, FaPaintBrush, FaPalette,
          FaAngleDoubleRight} from 'react-icons/fa';
import styles from '../../styles/button.module.css';
import panelStyles from '../../styles/panel.module.css';
import pdfjs from 'pdfjs-dist';
import TextBox from '../TextBox'
import Rect from '../Figures/Rect'
import Circle from '../Figures/Circle'
import Line from '../Figures/Line'
import BackgroundControlPanel from './extendedPanel';
import Picture from '../Image/Picture'

// const pdfjsLib = window['pdfjs-dist/build/pdf'];
const fabric = window.fabric;

class Panel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    updateCanvas: PropTypes.func,
    addBackgroundImg: PropTypes.func,
    setLoading: PropTypes.func,
    setClient: PropTypes.func,
  }
  static defaultProps = {
    onChange: function () {},
    showFigures: function () {},
    setLoading: function() {}
  }

  state = {
    brushsize: 10,
    canDraw: false,
    brushcolor:"#ff0000",
    backgroundImg: null,
    addTextBox: false,
    eraserActive: false,
    selectedOption: 'select',
  }

  componentMap = {
    'textBox': TextBox,
    'rect': Rect,
    'circle': Circle,
  }
  counter = 1;

  componentDidMount () {
    // console.log('CPPP',  this.props.canvas);
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
    this.setState({ brushsize: size }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  enableSelection = event => {
    event.preventDefault();
    this.setState({ canDraw: false, selectedOption: 'select'}, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  canUseBrush = event => {
    let curColor = document.getElementById('color').value;
    this.setState({ canDraw: true, selectedOption: 'pencil',
      brushcolor: this.state.eraserActive ? curColor: this.state.brushcolor}, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  brushColorChange = event => {
    console.log('brushColorChange');
    this.setState({ brushcolor: event.target.value }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  eraser = (e) => {
    e.preventDefault();
    console.log('eraser');
    this.setState({ brushcolor: 'white', canDraw: true,
      eraserActive: true, selectedOption: 'erase' }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  undoRedo = event => {
    event.preventDefault();
    this.props.canvas.remove(this.props.canvas.getObjects().slice(-1).pop());
  }

  deleteObj = event => {
    event.preventDefault();
    this.props.canvas.remove(this.props.canvas.getActiveObject());
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
    const canvasElement = this.componentMap[element](this.counter, {stroke: this.state.brushcolor});
    console.log('addElement', this.props.canvas);
    this.props.canvas.add(canvasElement);
    this.props.canvas.setActiveObject(canvasElement);
    this.props.canvas.isDrawingMode = false;
    this.props.canvas.renderAll();
    this.counter ++;
    this.props.updateCanvas(this.props.canvas);
  }

  drawLine = (e, element) => {
    e.preventDefault();
    let line = new Line(this.props.canvas);
    line.makeLine(this.counter, {stroke: this.state.brushcolor});
    this.counter ++;
  }

  render() {
    return (
      <nav className={panelStyles.mainMenu}>
        <div className={panelStyles.settings}>Canvas Tools</div>
        <div className={panelStyles.scrollbar} id="style-1">
          <ul>
          <li className={panelStyles.darkerli}>
            <a onClick={this.enableSelection}>
              <button title="Select" className={styles.btn} id="select"> <FaMousePointer />
              </button>
              <span className={panelStyles.navText}>Select</span>
            </a>
          </li>
          <li className={panelStyles.darkerli}>
            <a onClick={this.canUseBrush}>
              <button title="Pencil Tool" className={styles.btn} id="canDraw"> <FaPencilAlt />
              </button>
              <span className={panelStyles.navText}>Pencil</span>
            </a>
          </li>
            <li className={panelStyles.darkerli}>
              <a onClick={this.eraser}>
              <button title="Eraser" className={styles.btn} id="erase"> <FaEraser />
              </button>
              <span className={panelStyles.navText}>Eraser</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a onClick={event => {this.addElement(event,'textBox')}}>
              <button title="Text Box" className={styles.btn} id="textBox"><FaICursor />
              </button>
              <span className={panelStyles.navText}>Text Box</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a>
                <button title="pic" className={styles.btn} id="pic">
                  <FaFileImage />
                </button>
                <span className={panelStyles.navText}>Add Picture
                <Picture canvas={this.props.canvas} setLoading={this.props.setLoading}/>
                </span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a onClick={event => {this.addElement(event,'rect')}}>
                <button title="Rectangle" className={styles.btn} id="rect">
                  <FaSquareFull />
                </button>
                <span className={panelStyles.navText}>Add Rectangle</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a onClick={event => {this.addElement(event,'circle')}}>
                <button title="Circle" className={styles.btn} id="circle">
                  <FaCircle />
                </button>
                <span className={panelStyles.navText}>Add Circle</span>
              </a>
            </li>
            {/*<li className={panelStyles.darkerli}>*/}
            {/*  <a>*/}
            {/*  <button disabled={true} title="Draw Line" className={styles.btn} id="line" onClick={event => {this.drawLine(event,'line')}}><FaSlash />*/}
            {/*  </button>*/}
            {/*  <span className={panelStyles.navText}>Draw Line</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className={panelStyles.darkerli}>
              <a onClick={event => {this.deleteObj(event)}}>
                <button title="Delete" className={styles.btn} id="del">
                  <FaRegWindowClose />
                </button>
                <span className={panelStyles.navText}>Delete Selection</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a onClick={event => {this.undoRedo(event)}}>
                <button title="Undo" className={styles.btn} id="undo">
                  <FaUndo />
                </button>
                {/*<button title="Redo" className={styles.btn} id="redo">*/}
                {/*  <FaRegWindowClose />*/}
                {/*</button>*/}
                <span className={panelStyles.navText}>Undo</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a>
                <FaPalette className={styles.btn}/>
              <span className={panelStyles.navText}>
                <input title="Color Selector" id="color" type="color" defaultValue="#ff0000"
                       onChange={this.brushColorChange}/>
                Color Selector</span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a>
                <FaPaintBrush className={styles.btn}/>
              <span className={panelStyles.navText}>
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
              </span>
              </a>
            </li>
            <li className={panelStyles.darkerli}>
              <a>
              <FaAngleDoubleRight className={styles.btn}/>
              <span className={panelStyles.navText}><
                BackgroundControlPanel
                selectImage={this.selectImage}
                setLoading={this.props.setLoading}
                canvas={this.props.canvas}
                setClient={this.props.setClient}
              />
              </span>
              </a>
            </li>

          {/*<button title="Add Rectangle" id="rect" className={styles.btn} onClick={this.renderFigure}><FaSquareFull />*/}
          {/*</button>*/}
          {/*<button title="Add Circle" id="circle" className={styles.btn} onClick={this.renderFigure}><FaCircle />*/}
          {/*</button>*/}
          {/*<button title="Add PNG" id="image" className={styles.btn} onClick={this.renderFigure}><FaFileImage />*/}
          {/*</button>*/}
        </ul>
        </div>
      </nav>
    )
  }
}

export default Panel;
