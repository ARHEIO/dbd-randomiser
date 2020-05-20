import React, { ReactElement } from 'react';
import './KillerPanel.scss';

import DiamondIcon from '../../Atoms/DiamondIcon/DiamondIcon';
import SquareIcon from '../../Atoms/SquareIcon/SquareIcon';

import { Perk as IPerk } from '../../Services/generator/models';
import { GeneratedKiller } from '../../Services/generator/generate';

const KillerPanel = (props: { killer: GeneratedKiller }): ReactElement => {
  const {
    killer,
  } = props;
  return (
    <div className="killer">
      <SquareIcon name={killer.name} icon={killer.icon} rank={null} />
      {killer.addons.map((addon: any) => (
        <SquareIcon key={addon.name} name={addon.name} icon={addon.icon} rank={addon.rank} />
      ))}
      {killer.perks.map((perk: IPerk) => (
        <DiamondIcon key={perk.name} name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
};

export default KillerPanel;
