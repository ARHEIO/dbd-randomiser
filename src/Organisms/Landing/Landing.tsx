import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
       <Link className="link-button" to={`/survivor`}>
          <img alt="survivor" src="https://gamepedia.cursec dn.com/deadbydaylight_gamepedia_en/b/b3/IconHelpLoading_survivor.png?version=5b3fe327496a6c81537c17c036e9745f" />
          <p>Randomise survivor build</p>
        </Link>

        <Link className="link-button" to={`/killer`}>
          <img alt="killer" src="https://gamepedia.curse cdn.com/deadbydaylight_gamepedia_en/0/06/IconHelpLoading_killer.png?version=317ddad24cfb2b43f330e613179a257a" />
          <p>Randomise killer build</p>
        </Link>
    </div>
  );
}

export default Landing;
