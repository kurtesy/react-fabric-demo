import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import sampleJsonData from './testJsonOutput'
import styles from './styles/canvas.module.css'
import panelStyle from './styles/panel.module.css'
import WebSocketService from './services/webSocketService'

const fabric = window.fabric;
fabric.Canvas.prototype._enlivenObjects = function(objects, callback, reviver) {
    var _this = this;
    if (!objects || objects.length === 0) {
      callback && callback();
      return;
    }
    var renderOnAddRemove = this.renderOnAddRemove;
    this.renderOnAddRemove = false;
    fabric.util.enlivenObjects(objects, function(enlivenedObjects) {
      _this.clear(); // add clear operation here, when all objects are loaded
      enlivenedObjects.forEach(function(obj, index) {
        _this.insertAt(obj, index);
      });
      _this.renderOnAddRemove = renderOnAddRemove;
      callback && callback();
    }, null, reviver);
};


class ReloadJson extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 1200,
    height: 800,
  }

  state = {
    client: null,
    data: {}
  }

  canvas = new fabric.Canvas(this.c);

  componentDidMount() {
    this.canvas = new fabric.Canvas(this.c)
    this.canvas.backgroundColor = "#ffffff";
    this.canvas.renderAll();
    document.getElementById('jsonText').value = JSON.stringify(sampleJsonData);
  }

  renderJsonData = (data) => {
    if (data) {
        this.canvas.loadFromJSON(data, this.canvas.renderAll.bind(this.canvas))
        this.canvas.renderAll();
    }
    else {
      this.canvas.loadFromJSON(this.state.data, this.canvas.renderAll.bind(this.canvas))
      this.canvas.renderAll();
    }
  }

  readJsonData = () => {
    let textElement = document.getElementById('jsonText').value;
    let jsonData = {};
    try {
      JSON.parse(textElement);
      console.log('Rendering JSON...');
      this.setState({data: textElement}, function () {
        this.renderJsonData();
      }.bind(this));
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

  getMessage = message => {
    try {
      JSON.parse(message);
      this.setState({data: message})
      this.renderJsonData(message);
    }
    catch (e) {
      console.log(e.stack);
    }
  }

  setClient = client => {
    this.setState({client});
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
              <WebSocketService setClient={this.setClient} sendMessage={this.getMessage}/>
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
