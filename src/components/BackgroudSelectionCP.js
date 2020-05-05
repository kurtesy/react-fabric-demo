import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FileSelector from './ImagePicker'

class BackgroundControlPanel extends Component {
  static propTypes = {
    selectImage: PropTypes.func
  }
  static defaultProps = {
    selectImage: function() {
    }
  }

  render() {
    return (
      <Fragment>
          <FileSelector selectImage={this.props.selectImage}/>
    {/*//     <div>*/}
    {/*//     <label form="images">Choose a background image:</label>*/}
    {/*//     <canvas id="the-canvas" style={{ border: '1px solid black', display: 'none' }}/>*/}
    {/*//     <select id="images" onChange={val => this.props.selectImage(val)}>*/}
    {/*//       <option value=""/>*/}
    {/*//       <option value="https://i.imgur.com/MrGY5EL.jpg">Grassland</option>*/}
    {/*//       <option value="https://i.imgur.com/EVOFpNF.jpg">Snow</option>*/}
    {/*//       <option value="https://i.imgur.com/pSJwd0s.jpg">Green Canvas</option>*/}
    {/*//     </select>*/}
    {/*//*/}
    {/*//     <label form="imagesPdf">Choose a image from pdf:</label>*/}
    {/*//     <canvas id="the-canvas" style={{ border: '1px solid black', display: 'none' }}/>*/}
    {/*//     <select id="imagesPdf" onChange={val => this.props.selectImage(val)}>*/}
    {/*//       <option value='-1'>No Page Selected</option>*/}
    {/*//       <option value='1'>Page-1</option>*/}
    {/*//       <option value='2'>Page-2</option>*/}
    {/*//       <option value='3'>Page-3</option>*/}
    {/*//       <option value='4'>Page-4</option>*/}
    {/*//     </select>*/}
    {/*// </div>*/}
      </Fragment>
    )
  }
}

export default BackgroundControlPanel || null;
