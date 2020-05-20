import React, { ReactElement } from 'react';
import {
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';


import LandingView from '../Organisms/LandingView/LandingView';
import KillerView from '../Organisms/KillerView/KillerView';
import SurvivorView from '../Organisms/SurvivorView/SurvivorView';

const Router = (): ReactElement => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/killer" component={KillerView} />
      <Route path="/survivor" component={SurvivorView} />
      <Route path="/*" exact component={LandingView} />
    </Switch>
  </HashRouter>
);


export default Router;
