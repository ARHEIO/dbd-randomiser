import React from 'react';
import './App.scss';

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

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header_top-bar"></div>
        <div className="app-header_bottom-bar">
          <h1>Dead By Daylight Loadout Randomiser</h1>
        </div>
      </header>
      <section className="app">
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
      </section>
      <footer>
        <p>Credit to icons goes to u/thatpikminguy on Reddit</p>
        <p>Grab the icon set yourself <a href="https://www.reddit.com/r/PerkByDaylight/comments/fhqoux/the_shitty_ui_pack_13_chains_of_hate_doctor/" target="_blank">on r/PerkByDaylight</a></p>
      </footer>
    </div>
  );
}

export default App;
