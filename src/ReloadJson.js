import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import sampleJsonData from './testJsonOutput'
import styles from './styles/canvas.module.css'
import panelStyle from './styles/panel.module.css'


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

  data = {}

  canvas = new fabric.Canvas(this.c);

  componentDidMount() {
    this.canvas = new fabric.Canvas(this.c)
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.renderAll();
    document.getElementById('jsonText').value = JSON.stringify(sampleJsonData);
  }

  renderJsonData = () => {
    this.canvas.loadFromJSON(this.data, this.canvas.renderAll.bind(this.canvas))
    this.canvas.renderAll();
  }

  readJsonData = () => {
    let textElement = document.getElementById('jsonText').value;
    let jsonData = {};
    try {
      jsonData = JSON.parse(textElement);
      console.log('Rendering JSON...');
      this.data = textElement;
      this.renderJsonData();
    }
    catch (e) {
      alert('Invalid json');
      console.log(e.stack);
    }
    console.log(jsonData);
  }

  clear = e => {
    e.preventDefault()
    this.canvas.clear()
  }

  render() {
    const { width, height } = this.props;
    return (
      <Fragment>
        <table>
          <tbody>
          <tr>
            <td>
              <canvas ref={c => (this.c = c)} width={width} height={height}
                      className={styles.canvasStyle}/>
              <br />
              <textarea id="jsonText" defaultValue={JSON.stringify(this.data)}
                        rows="10" cols="80"/>
              <br/>
            </td>
            <td className={panelStyle.rightPanel}>
              <button onClick={this.readJsonData}>
                Render JSON on Canvas
              </button>
              <button
                onClick={this.clear}
              >
                Clear Canvas
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default ReloadJson;
