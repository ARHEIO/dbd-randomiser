import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
       <Link className="link-button" to={`/survivor`}>
          <img alt="survivor" src="https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_survivor.png" />
          <p>Randomise survivor build</p>
        </Link>

        <Link className="link-button" to={`/killer`}>
          <img alt="killer" src="https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_killer.png" />
          <p>Randomise killer build</p>
        </Link>
    </div>
  );
}

export default Landing;
