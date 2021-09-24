import React from 'react';
import { Entity } from '../../src/types/common';
import { KillerLoadout } from '../../src/types/killer';
import { SurvivorLoadout } from '../../src/types/survivor';
import { DiamondIcon } from '../DiamondIcon';
import { SquareIcon } from '../SquareIcon';
import styles from './LoadoutPanel.module.scss';

const Character: React.VFC<{name: string; icon: string}> = ({name, icon}) => <SquareIcon name={name} icon={icon} rarity={-1} />

const Addons: React.VFC<{addons: Entity[]}> = ({ addons }) => <>
  { addons.map((addon: Entity) => <SquareIcon name={addon.name} icon={addon.icon} rarity={addon.rank} />) }
</>

const Perks: React.VFC<{perks: Entity[]}> = ({ perks }) => <>
  { perks.map((perk: Entity) => <DiamondIcon name={perk.name} icon={perk.icon} rarity={perk.rank} />) }
</>

export const SurvivorPanel: React.VFC<{loadout: SurvivorLoadout}> = ({loadout: {name, icon, item, perks}}) => {
  const Item: React.VFC<{item: Entity}> = ({ item }) => <SquareIcon name={item.name} icon={item.icon} rarity={item.rank} />

  return (
    <div className={styles.loadoutPanel}>
      <Character name={name} icon={icon} />
      <Item item={item} />
      { item.addons.length > 0 ? <Addons addons={item.addons} /> : <div className={styles.firecrackerBuffer} />}
      <Perks perks={perks}/>
    </div>
  );
};

export const KillerPanel: React.VFC<{loadout: KillerLoadout}> = ({loadout: {name, icon, power, perks}}) => {
  const Power: React.VFC<{power: Entity}> = ({ power }) => <SquareIcon name={power.name} icon={power.icon} rarity={power.rank} />

  return (
    <div className={styles.loadoutPanel}>
      <Character name={name} icon={icon} />
      <Power power={power} />
      <Addons addons={power.addons} />
      <Perks perks={perks}/>
    </div>
  );
};
