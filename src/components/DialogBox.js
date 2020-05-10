import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, MenuItem  } from 'material-ui';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Button } from '@material-ui/core';

class DialogBox extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    selectedValue: PropTypes.string.isRequired,
  }

  static defaultProps = {
    selectedValue: '',
    open: false
  }

  state = {
    size: 'os',
    open: this.props.open,
    position: 'center'
  }

  componentDidMount() {
  }

  handleSizeChange = event => {
    this.setState({size: event.target.value})
  }

  handlePositionChange = event => {
    this.setState({position: event.target.value})
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.onClose(this.state.size, this.state.position);
  };

  render() {
    return (
    <MuiThemeProvider>
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} style={{zIndex: 1}}>
        <DialogContent>
          <DialogContentText>Select the size & position of background Image uploaded
          </DialogContentText>
          <form noValidate style={ {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
          }}>
            <FormControl style={{minWidth: 120}}>
              <InputLabel htmlFor="sizeOptions">Background resize</InputLabel>
              <Select
                value={this.state.size}
                onChange={this.handleSizeChange}
                inputProps={{
                  name: 'sizeOptions',
                  id: 'sizeOptions',
                }}
              >
                <MenuItem value='os'>Original Size</MenuItem>
                <MenuItem value="s">Stretched</MenuItem>
                <MenuItem value='sh'>Stretch Height</MenuItem>
                <MenuItem value='sw'>Stretch Width</MenuItem>
              </Select>
              <InputLabel htmlFor="position">Position</InputLabel>
              <Select
                value={this.state.position}
                onChange={this.handlePositionChange}
                inputProps={{
                  name: 'position',
                  id: 'position',
                }}>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='topLeft'>Top Left</MenuItem>
                <MenuItem value='topCenter'>Top Center</MenuItem>
                <MenuItem value='topRight'>Top Right</MenuItem>
                <MenuItem value='leftCenter'>Left Center</MenuItem>
                <MenuItem value='rightCenter'>Right Center</MenuItem>
                <MenuItem value='bottomLeft'>Bottom Left</MenuItem>
                <MenuItem value='bottomCenter'>Bottom Center</MenuItem>
                <MenuItem value='bottomRight'>Bottom Right</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            OK
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
    );
  }
}

export default DialogBox;