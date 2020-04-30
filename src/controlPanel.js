import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ControlPanel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    showFigures: PropTypes.func,
    addBackgroudImg: PropTypes.func
  }
  static defaultProps = {
    onChange: function () {},
    showFigures: function () {}
  }

  state = {
    brushsize: 10,
    canDraw: true,
    brushcolor:"#ff0000",
    show: {rect: false,
      circle: false,
      image: false},
    backgroundImg: null
  }

  componentDidMount () {
    let selectedImg = document.getElementById('images').value;
    this.props.addBackgroudImg(selectedImg);
    this.setState({backgroundImg: selectedImg});
  }

  brushSizeChange = event => {
    let brushSize = parseInt(event.target.value);
    this.setState({ brushsize: brushSize }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  canUseBrush = event => {
    this.setState({ canDraw: event.target.checked }, function () {
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

  // addBackgroudImg = event => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   console.log(event.target);
  //   var file = event.target.files[0];
  //   console.log(JSON.stringify(file));
  //   //this.props.addBackgroudImg(imageObj);
  // }

  selectImage = img => {
    let selectedImg = document.getElementById('images').value;
    this.props.addBackgroudImg(selectedImg);
    this.setState({backgroundImg: selectedImg});
  }

  render() {
    const controlPanel = {
      color: 'white',
      backgroundColor: 'Grey',
      padding: '10px',
      fontFamily: 'Arial',
    }

    return (
      <div style={controlPanel}>
        <label>
          Drawing: <input id="canDraw" type="checkbox"
                          defaultChecked onChange={this.canUseBrush}/>
        </label>
        <label>
          Color: <input id="color" type="color" defaultValue="#ff0000"
                        onChange={this.brushColorChange}/>
        </label>
        <label style={{display: "block"}}>
          Brush size:{' '}
          <input
            id="typeinp"
            type="range"
            min="0"
            max="100"
            defaultValue={this.state.brushsize}
            onChange={this.brushSizeChange}
            step="1"
          />
        </label>
        <button id="rect" onClick={this.renderFigure}>Show Rectange
        </button>
        <button id="circle" onClick={this.renderFigure}>Show Circle
        </button>
        <button id="image" onClick={this.renderFigure}>Show Image
        </button>

        <br/>
        <label form="images">Choose a background image:</label>
        <select id="images" onChange={val => this.selectImage(val)}>
          <option value=""> </option>
          <option value="https://i.imgur.com/MrGY5EL.jpg">Grassland</option>
          <option value="https://i.imgur.com/EVOFpNF.jpg">Snow</option>
          <option value="https://i.imgur.com/pSJwd0s.jpg">Green Canvas</option>
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
