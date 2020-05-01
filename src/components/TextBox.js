import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

class Rect extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
  }

  static defaultProps = {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    fill: 'white',
  }

  componentDidMount() {
    const textBox = new fabric.Textbox(this.props);
    this.props.canvas.add(textBox)
  }

  render() {
    return null
  }
}

export default Rect
