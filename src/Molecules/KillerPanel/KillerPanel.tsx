import React, { ReactElement } from 'react';
import './KillerPanel.scss';

import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';

import { Perk as IPerk } from '../../Services/generator/models';
import { GeneratedKiller } from '../../Services/generator/generate';

const KillerPanel = (props: { killer: GeneratedKiller }): ReactElement => {
  const {
    killer,
  } = props;
  return (
    <div className="killer">
      <div className="killer_name">
        <Portrait name={killer.name} icon={killer.icon} />
      </div>
      {killer.addons.map((addon: any) => (
        <Addon key={addon.name} name={addon.name} icon={addon.icon} rank={addon.rank} />
      ))}
      {killer.perks.map((perk: IPerk) => (
        <Perk key={perk.name} name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
};

export default KillerPanel;
