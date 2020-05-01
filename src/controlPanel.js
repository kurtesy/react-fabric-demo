import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSquareFull, FaCircle, FaFileImage, FaPencilAlt } from 'react-icons/fa';
import styles from './styles/button.module.css';
import pdfjs from 'pdfjs-dist';

var pdfjsLib = window['pdfjs-dist/build/pdf'];

class ControlPanel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    showFigures: PropTypes.func,
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
    show: {rect: false,
      circle: false,
      image: false},
    backgroundImg: null
  }

  componentDidMount () {
    let selectedImg = document.getElementById('images').value;
    this.props.addBackgroundImg(selectedImg);
    this.setState({backgroundImg: selectedImg});
  }

  brushSizeChange = (event, size) => {
    event.preventDefault();
    this.setState({ brushsize: size }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  canUseBrush = event => {
    this.setState({ canDraw: !this.state.canDraw }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  brushColorChange = event => {
    this.setState({ brushcolor: event.target.value }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  renderFigure = event => {
    let id = event.target.id
    let show = this.state.show;
    if (id === "rect")
    {
      console.log(event.target.id);
      show.rect = true;
    }
    if (id === "circle")
    {
      show.circle = true;
    }
    if (id === "image")
    {
      show.image = true;
    }
    this.props.showFigures(this.state.show);
  }

  // addBackgroundImg = event => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   console.log(event.target);
  //   var file = event.target.files[0];
  //   console.log(JSON.stringify(file));
  //   //this.props.addBackgroundImg(imageObj);
  // }

  selectImage = img => {
    let selectedImg = document.getElementById('images').value;
    let pageNo = document.getElementById('imagesPdf').value;
    pageNo = parseInt(pageNo);
    if ( pageNo !== -1)
    {
      this.readPDF(pageNo).then(img => {
        this.props.addBackgroundImg(img);
        this.setState({backgroundImg: img});
      });
    }
    this.props.addBackgroundImg(selectedImg);
    this.setState({backgroundImg: selectedImg});
  }

  readPDF = (pageNo) => {
    let pdfImage;
    pdfjs.disableWorker = true;
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    let testUrl= "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
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

  render() {
    const controlPanel = {
      color: 'white',
      backgroundColor: '#9c27b06e',
      padding: '10px',
      fontFamily: 'Arial',
      border: 'solid 3px',
      borderRadius: '12px',
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      // display: 'grid',
      // gridAutoFlow: 'column',
      // gridTemplateRows: '50px 100px',
      // gridTemplateColumns: '100px 50px'
    }

    return (
      <div style={controlPanel}>
          <button className={styles.btn} id="canDraw" onClick={this.canUseBrush}> <FaPencilAlt />
          </button>
        <label>
          Color: <input id="color" type="color" defaultValue="#ff0000"
                        onChange={this.brushColorChange}/>
        </label>
        <button id="brushSize1" className={styles.brush} onClick={event => this.brushSizeChange(event,5)}><FaCircle style={{fontSize: 10}}/>
        </button>
        <button id="brushSize2" className={styles.brush} onClick={event => this.brushSizeChange(event,10)}><FaCircle style={{fontSize: 20}}/>
        </button>
        <button id="brushSize3" className={styles.brush} onClick={event => this.brushSizeChange(event,15)}><FaCircle style={{fontSize: 30}}/>
        </button>
        <button id="brushSize4" className={styles.brush} onClick={event => this.brushSizeChange(event,20)}><FaCircle style={{fontSize: 40}}/>
        </button>

        <button id="rect" className={styles.btn} onClick={this.renderFigure}><FaSquareFull />
        </button>

        <button id="circle" className={styles.btn} onClick={this.renderFigure}><FaCircle />
        </button>
        <button id="image" className={styles.btn} onClick={this.renderFigure}><FaFileImage />
        </button>

        <br/>
        <label form="images">Choose a background image:</label>
        <canvas id="the-canvas" style={{border: "1px solid black", display: "none"}}></canvas>
        <select id="images" onChange={val => this.selectImage(val)}>
          <option value=""> </option>
          <option value="https://i.imgur.com/MrGY5EL.jpg">Grassland</option>
          <option value="https://i.imgur.com/EVOFpNF.jpg">Snow</option>
          <option value="https://i.imgur.com/pSJwd0s.jpg">Green Canvas</option>
        </select>

        <label form="imagesPdf">Choose a image from pdf:</label>
        <canvas id="the-canvas" style={{border: "1px solid black", display: "none"}}></canvas>
        <select id="imagesPdf" onChange={val => this.selectImage(val)}>
          <option value='-1'>No Page Selected</option>
          <option value='1'>Page-1</option>
          <option value='2'>Page-2</option>
          <option value='3'>Page-3</option>
          <option value='4'>Page-4</option>
        </select>

        {/* <input type='file' id='file' ref={imgObj => (this.imgObj = imgObj)}
                style={{display: 'none'}}
                onChange={this.addBackgroudImg.bind(this)}/>
        <button onClick={()=>{this.imgObj.click()}}>File upload </button> */}
      </div>
    )
  }
}

export default ControlPanel;
