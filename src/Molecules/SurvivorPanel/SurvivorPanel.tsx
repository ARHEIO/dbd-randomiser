import React, { ReactElement } from 'react';
import './SurvivorPanel.scss';

import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';

import { Perk as IPerk } from '../../Services/generator/models';
import { GeneratedSurvivor } from '../../Services/generator/generate';

const SurvivorPanel = (props: {survivor: GeneratedSurvivor}): ReactElement => {
  const { survivor } = props;
  return (
    <div className="survivor">
      <div className="survivor_name">
        <Portrait name={survivor.name} icon={survivor.icon} />
      </div>
      <div className="survivor_item">
        <Addon name={survivor.item.name} icon={survivor.item.icon} rank={survivor.item.rank} />
      </div>
      {survivor.addons.length > 0
        ? survivor.addons.map((addon: any) => (
          <Addon key={addon.name} name={addon.name} icon={addon.icon} rank={addon.rank} />
        ))
        : <div style={{ gridColumn: 'span 2' }} />}
      {survivor.perks.map((perk: IPerk) => (
        <Perk key={perk.name} name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
};
export default SurvivorPanel;
