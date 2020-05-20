import React, { ReactElement } from 'react';
import './SurvivorPanel.scss';

import DiamondIcon from '../../Atoms/DiamondIcon/DiamondIcon';
import SquareIcon from '../../Atoms/SquareIcon/SquareIcon';

import { Perk as IPerk } from '../../Services/generator/models';
import { GeneratedSurvivor } from '../../Services/generator/generate';

const SurvivorPanel = (props: {survivor: GeneratedSurvivor}): ReactElement => {
  const { survivor } = props;
  return (
    <div className="survivor">
      <div className="survivor_name">
        <SquareIcon name={survivor.name} icon={survivor.icon} rank={null} />
      </div>
      <div className="survivor_item">
        <SquareIcon name={survivor.item.name} icon={survivor.item.icon} rank={survivor.item.rank} />
      </div>
      {survivor.addons.length > 0
        ? survivor.addons.map((addon: any) => (
          <SquareIcon key={addon.name} name={addon.name} icon={addon.icon} rank={addon.rank} />
        ))
        : <div style={{ gridColumn: 'span 2' }} />}
      {survivor.perks.map((perk: IPerk) => (
        <DiamondIcon key={perk.name} name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
};
export default SurvivorPanel;
