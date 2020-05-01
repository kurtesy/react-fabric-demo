import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import sampleJsonData from './testJsonOutput'
import styles from './styles/canvas.module.css'


const fabric = window.fabric;

class ReloadJson extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 800,
    height: 600,
  }

  state = {
    data: {}
  }

  canvas = new fabric.Canvas(this.c);

  componentDidMount() {
    this.canvas = new fabric.Canvas(this.c)
    // this.setState({ data: sampleJsonData});
    document.getElementById('jsonText').value = JSON.stringify(sampleJsonData);
  }

  renderJsonData = () => {
    this.canvas.loadFromJSON(this.state.data, this.canvas.renderAll.bind(this.canvas))
    this.canvas.renderAll();
  }

  readJsonData = data => {
    let textElement = document.getElementById('jsonText').value;
    let jsonData = {};
    try {
      jsonData = JSON.parse(textElement);
      console.log('Rendering JSON...');
      this.setState({data:textElement});
      this.renderJsonData();
    }
    catch (e) {
      alert('Invalid json');
      console.log(e.stack);
    }
    console.log(jsonData);
    this.canvas.renderAll();
  }

  clear = e => {
    e.preventDefault()
    this.canvas.clear()
  }

  canvasStyle = {
    border: "solid 1px #4CAF50",
    marginTop: "5px"
  }

  render() {
    const { width, height } = this.props;
    return (
      <Fragment>
        <canvas ref={c => (this.c = c)} width={width} height={height}
                className={styles.canvasStyle}/>
        <br />
        <textarea id="jsonText" defaultValue={JSON.stringify(this.state.data)}
                  rows="10" cols="80"/>
        <br/>
        <button onClick={this.readJsonData}>
          Render JSON on Canvas
        </button>
        <button
          onClick={this.clear}
        >
          Clear Canvas
        </button>
      </Fragment>
    );
  }
}

export default ReloadJson;
