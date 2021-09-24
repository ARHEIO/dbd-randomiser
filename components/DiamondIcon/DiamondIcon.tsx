import { Rarity } from '@stephenpoole/deadbydaylight';
import React, { ReactElement } from 'react';
import { getRankColour } from '../../src/utils/getRankColour';
import styles from './DiamondIcon.module.scss';

// TODO: Find a way to have a placeholder spinner component for the image

export const DiamondIcon: React.VFC<{name: string; icon: string; rarity: number}> = ({name, icon, rarity}): ReactElement => {

  return (
    <div>
      <p className={styles.diamondIconName}>{name}</p>
      <div className={styles.diamondIconIcon} style={{ backgroundColor: getRankColour(rarity) }}>
        <img alt={name} src={`https://assets.arhe.io/dbd-randomiser/shitty/${icon}.png`} />
      </div>
    </div>
  );
};
