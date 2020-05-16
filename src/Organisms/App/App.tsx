import React from 'react';
import logo from '../../Assets/logo.svg';
import './App.scss';
import { generateKiller, generateSurvivor } from '../../Services/generate';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Landing from '../Landing/Landing';
import Killer from '../Killer/Killer';
import Survivor from '../Survivor/Survivor';

function App() {
  const appFinishedLoading = true;
  console.log('%c⧭', 'color: #733d00', generateKiller());
  console.log('%c⧭', 'color: #733d00', generateSurvivor());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router
        basename={`/dbd-randomiser`}>
        {
          appFinishedLoading
            ? (
            <Switch>
              <Route path='/killer' component={Killer} />
              <Route path='/survivor' component={Survivor} />
              <Route path='/*' exact component={Landing} />
            </Switch>
            ) : <div></div>
        }
      </Router>
    </div>
  );
}

export default App;
