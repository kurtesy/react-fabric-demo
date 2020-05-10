import React from 'react';
import PropTypes from 'prop-types';

const fabric = window.fabric;

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
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    fill: 'white',
  }

  componentDidMount() {
    const rect = new fabric.Rect({...this.props, stroke: 'black',
      strokeWidth: 1})
    this.props.canvas.add(rect)
    this.props.canvas.setActiveObject(rect);
  }

  render() {
    return null
  }
}

export default Rect
