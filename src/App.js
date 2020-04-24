import React, {Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Page1 = lazy(() => import('./components/Page1.js'))
const Page2 = lazy(() => import('./components/Page2.js'))
const Page3 = lazy(() => import('./components/Page3.js'))

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
        <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="flexgrow">
            </li>
            <li>
              <Link to="/Page1">Page1</Link>
            </li>
            <li>
              <Link to="/Page2">Page2</Link>
            </li>
            <li>
              <Link to="/Page3">Page3</Link>
            </li>
          </ul>
        </nav>
        {/* </header> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Route>
            <Route path="/Page1" component={Page1}>
              {/* < Page1 /> */}
            </Route>
            <Route path="/Page2" component={Page2}>
              {/* < Page2 /> */}
            </Route>
            <Route path="/Page3" component={Page3}>
              {/* < Page3 /> */}
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
