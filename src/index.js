import React from 'react'
import { render } from 'react-dom'
import 'fabric'

import DesignCanvas from './DesignCanvas'

import ReloadJson from './ReloadJson'
import FreeDraw from './components/Freedraw'

const mainStyle = {
  textAlign: 'center',
  marginLeft: '10px',
  marginRight: '10px',
  color: 'Yellow',
}

const App = () => (
  <div style={mainStyle}>
    <h3>Master Screen</h3>
    <DesignCanvas>
      <FreeDraw />
    </DesignCanvas>
    <br />
    <h3>Client Screen</h3>
    <ReloadJson />
  </div>
);

render(<App />, document.getElementById('root'))
