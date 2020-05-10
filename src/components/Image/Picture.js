import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash.omit'
import FileSelector from './ImagePicker'

const fabric = window.fabric

class Picture extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    scale: PropTypes.number.isRequired
  }

  static defaultProps = {
    scale: 0.5,
  }

  selectPicture = image => {
    const options = omit(this.props, ['scale'])
    fabric.Image.fromURL(image, img => {
      img.scale(this.props.scale)
      img.selectable = true;
      this.props.canvas.add(img)
    }, options)
  }

  render() {
    return <FileSelector selectImage={this.selectPicture} setLoading={this.props.setLoading} useButton={false}/>
  }
}

export default Picture;
