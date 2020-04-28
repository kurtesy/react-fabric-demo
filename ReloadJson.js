import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import sampleJsonData from './testJsonOutput'

const fabric = window.fabric

class ReloadJson extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 600,
    height: 300,
  }

  state = {
    data: {},
    canvas: null,
  }

  componentDidMount() {
    const canvas = new fabric.Canvas(this.c)
    this.setState({ canvas, data: sampleJsonData })
    document.getElementById('jsonText').value = JSON.stringify(sampleJsonData)
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  renderJsonData = () => {
    let newCanvas = this.state.canvas;
    newCanvas.loadFromJSON(this.state.data, newCanvas.renderAll.bind(newCanvas))
    newCanvas.renderAll();
    this.setState({ canvas: newCanvas })
  }

  readJsonData = data => {
    let textElement = document.getElementById('jsonText').value
    let jsonData = {}
    try {
      jsonData = JSON.parse(textElement)
      console.log('OK')
      this.setState({ canvas: this.state.canvas.clear(), data: textElement })
      this.renderJsonData()
    } catch (e) {
      alert('Invalid json')
      console.log(e.stack)
    }
    console.log(jsonData)
  }

  clear = e => {
    e.preventDefault()
    this.state.canvas.clear()
  }

  canvasStyle = {
    borderStyle: 'solid',
    marginTop: '5px',
  }

  render() {
    const { width, height } = this.props
    return (
      <Fragment>
        <canvas
          ref={c => (this.c = c)}
          width={width}
          height={height}
          style={this.canvasStyle}
        />
        <br />
        <textarea
          id="jsonText"
          defaultValue={JSON.stringify(this.state.data)}
          rows="10"
          cols="80"
        />
        <br />
        <button onClick={this.readJsonData}>Render JSON on Canvas</button>
        <button onClick={this.clear}>Clear Canvas</button>
      </Fragment>
    )
  }
}

export default ReloadJson
