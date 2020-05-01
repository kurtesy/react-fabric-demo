import React from 'react'
import PropTypes from 'prop-types'

class FreeDraw extends React.Component {
  static propTypes = {
    canvas: PropTypes.object
  }

  static defaultProps = {
    top: 0,
    left: 0,
    width: 50,
    height: 50
  }

  componentDidMount() {
    console.log('Starting Free Draw')
    var canvas = this.props.canvas
    canvas.isDrawingMode = true;
    this.props.updatedCanvas(canvas)
  }

  render() {
    return null
  }
}

export default FreeDraw;
