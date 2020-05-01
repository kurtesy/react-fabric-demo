import React from 'react'
import { render } from 'react-dom'
import 'fabric-webpack'

import DesignCanvas from './DesignCanvas'
import FreeDraw from './components/Freedraw'
import ReloadJson from './ReloadJson'

const mainStyle = {
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'
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
