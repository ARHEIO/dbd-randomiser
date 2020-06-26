import React, { ReactElement } from 'react';
import './App.scss';

import Footer from '../../Molecules/Footer/Footer';
import Header from '../../Molecules/Header/Header';
import HeaderNav from '../../Molecules/HeaderNav/HeaderNav';
import Router from '../../Router/Router';
import Store from '../../Store/Store';

const App = (): ReactElement => (
  <div className="app-container">
    <Store>
      <Header />
      <section className="app">
        <HeaderNav />
        <Router />
      </section>
      <Footer />
    </Store>
  </div>
);

export default App;
