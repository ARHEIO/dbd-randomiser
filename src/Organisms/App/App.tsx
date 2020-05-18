import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LandingView from '../LandingView/LandingView';
import KillerView from '../KillerView/KillerView';
import SurvivorView from '../SurvivorView/SurvivorView';

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
                <Route path='/killer' component={KillerView} />
                <Route path='/survivor' component={SurvivorView} />
                <Route path='/*' exact component={LandingView} />
              </Switch>
              ) : <div></div>
            }
        </Router>
      </section>
      <footer className="app-footer">
        <p>Credit to icons goes to u/thatpikminguy on Reddit. Grab the icon set yourself on <a href="https://www.reddit.com/r/PerkByDaylight/comments/fhqoux/the_shitty_ui_pack_13_chains_of_hate_doctor/" target="_blank" rel="noopener noreferrer">r/PerkByDaylight</a></p>
      </footer>
    </div>
  );
}

export default App;
