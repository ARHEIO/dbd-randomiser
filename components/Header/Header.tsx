import React from 'react';
import styles from './Header.module.scss';

export const Header: React.VFC = () => (
  <header>
    <div className={styles.headerTopBar} />
    <div className={styles.headerBottomBar}>
      <h1>Dead By Daylight Loadout Randomiser</h1>
    </div>
  </header>
);
