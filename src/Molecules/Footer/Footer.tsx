import React, { ReactElement } from 'react';
import './Footer.scss';

const Footer = (): ReactElement => (
  <footer className="app-footer">
    <p>
      Credit to icons goes to u/thatpikminguy on Reddit. Grab the icon set yourself on
      <a
        href="https://www.reddit.com/r/PerkByDaylight/comments/fhqoux/the_shitty_ui_pack_13_chains_of_hate_doctor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        r/PerkByDaylight
      </a>
    </p>
  </footer>
);

export default Footer;
