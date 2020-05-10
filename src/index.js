import React from 'react'
import { render } from 'react-dom'
import 'fabric'
import DesignCanvas from './DesignCanvas'
import ReloadJson from './ReloadJson'
import Home from './Home'

const mainStyle = {

}

const App = () => (
  <div style={mainStyle}>
      {/*<Router>*/}
      {/*    <Route path = "/" component = {App}>*/}
      {/*        <IndexRoute component = {Home} />*/}
      {/*        <Route path = "home" component = {Home} />*/}
      {/*        /!*<Route path = "about" component = {About} />*!/*/}
      {/*        /!*<Route path = "contact" component = {Contact} />*!/*/}
      {/*    </Route>*/}
      {/*</Router>*/}
    <DesignCanvas>
    </DesignCanvas>
    {/*<br />*/}
    {/*<h3>Client Screen</h3>*/}
    {/*<ReloadJson />*/}
  </div>
);

render(<App />, document.getElementById('root'))
