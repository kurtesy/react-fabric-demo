import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ControlPanel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    showFigures: PropTypes.func
  }
  static defaultProps = {
    onChange: function () {},
    showFigures: function () {}
  }

  state = {
    brushsize: this.props,
    canDraw: true,
    brushcolor:"#ff0000",
    show: {rect: false,
      circle: false,
      image: false}
  }

  brushSizeChange = event => {
    this.setState({ brushsize: event.target.value }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  canUseBrush = event => {
    this.setState({ canDraw: event.target.checked }, function () {
      this.props.onChange(this.state)
    }.bind(this));
  }

  brushColorChange = event => {
    console.log(event.target.value);
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
            max="1000"
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
      </div>
    )
  }
}

export default ControlPanel
