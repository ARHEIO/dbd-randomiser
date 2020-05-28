import React, { ReactElement } from 'react';
import './SurvivorPanel.scss';

import DiamondIcon from '../../Atoms/DiamondIcon/DiamondIcon';
import SquareIcon from '../../Atoms/SquareIcon/SquareIcon';

import { Perk as IPerk, GeneratedSurvivor } from '../../Services/generator/models';

const SurvivorPanel = (props: {survivor: GeneratedSurvivor}): ReactElement => {
  const { survivor } = props;
  return (
    <div className="survivor">
      <SquareIcon name={survivor.name} icon={survivor.icon} rank={null} />
      <SquareIcon name={survivor.item.name} icon={survivor.item.icon} rank={survivor.item.rank} />
      {survivor.item.addons.length > 0
        ? survivor.item.addons.map((addon: any) => (
          <SquareIcon key={addon.name} name={addon.name} icon={addon.icon} rank={addon.rank} />
        ))
        : <div className="firecracker-buffer" />}
      {survivor.perks.map((perk: IPerk) => (
        <DiamondIcon key={perk.name} name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
};
export default SurvivorPanel;
