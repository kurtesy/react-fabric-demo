import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CircleLoader from "react-spinners/CircleLoader";

import spinnerStyles from '../styles/spinner.module.css'

class FileSelector extends Component {
  static propTypes = {
    fileType: PropTypes.string,
    selectImage: PropTypes.func
  }
  static defaultProps = {
    selectImage: function() {},
    fileType: 'image/*'
  }

  state = {
    loading: false
  };

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  fileToBase64 = async (file) => {
    const image = await this.toBase64(file);
    return image;
  }

  handleChange = selectorFiles => {
    console.log('selectorFiles', selectorFiles);
    this.setState({loading: true})
    this.file = selectorFiles[0];
    this.fileToBase64(this.file).then(image => {
      this.props.selectImage(image);
      this.setState({loading: false})
    }).catch(err=> {console.log('File Reader error', err)});
  }

  render ()
  {
    return (
      <div>
          <input type="file"
           onChange={ (e) => this.handleChange(e.target.files) }
           accept={this.props.fileType}
           multiple={false} />
        {this.state.loading && <div className={spinnerStyles.loaderDiv}>
            <div className={spinnerStyles.loaderPosition}>
                <CircleLoader
                  style={spinnerStyles.loader}
                  size={60}
                  color={"#ff0000"}
                  loading={this.state.loading}
                />
                Loading...
            </div>
           </div>}
      </div>
    )
  }
}

export default FileSelector;