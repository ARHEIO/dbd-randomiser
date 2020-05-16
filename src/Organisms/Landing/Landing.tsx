import React from 'react';
import logo from './logo.svg';
import './Landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="App">
       <Link to={`/survivor`}>Survivor</Link>
       <Link to={`/killer`}>Killer</Link>
    </div>
  );
}

export default Landing;
