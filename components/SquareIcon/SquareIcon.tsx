import React, { ReactElement } from 'react';
import { getRankColour } from '../../src/utils/getRankColour';
import styles from './SquareIcon.module.scss';

// TODO: Find a way to have a placeholder spinner component for the image

export const SquareIcon: React.VFC<{name: string; icon: string; rarity: number}> = ({name, icon, rarity}): ReactElement => {

  return (
    <div className={styles.squareIcon}>
      <p className={styles.squareIconName}>{name}</p>
      <div className={styles.squareIconIcon} style={{ backgroundColor: getRankColour(rarity) }}>
        <img alt={name} src={`https://assets.arhe.io/dbd-randomiser/shitty/${icon}.png`} />
      </div>
    </div>
  );
};
