import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import buttonStyles from '../../styles/button.module.css'

class FileSelector extends Component {
  static propTypes = {
    fileType: PropTypes.string,
    selectImage: PropTypes.func,
    useButton: PropTypes.bool
  }
  static defaultProps = {
    selectImage: function() {},
    fileType: 'image/*',
    useButton: true
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
    this.props.setLoading(true)
    this.file = selectorFiles[0];
    this.fileToBase64(this.file).then(image => {
      this.props.selectImage(image);
      this.props.setLoading(false)
    }).catch(err=> {console.log('File Reader error', err)});
  }

  render ()
  {
    return (
      <div>
        <Button
          variant={ this.props.useButton ? "contained" : "text"}
          component="label"
          size={'small'}
          className={buttonStyles.panelBtn}
          color={ this.props.useButton ? "primary" : "default"}
        >
          Upload an image
          <input type="file"
           onChange={ (e) => this.handleChange(e.target.files) }
           accept={this.props.fileType}
           multiple={false}
           style={{ display: "none" }} />
        </Button>
      </div>
    )
  }
}

export default FileSelector;