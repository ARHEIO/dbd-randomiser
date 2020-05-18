import React from 'react';
import './KillerPanel.scss';

import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';

import { Perk as IPerk } from '../../Services/generator/models'
import { GeneratedKiller } from '../../Services/generator/generate';

const KillerPanel = (props: {killer: GeneratedKiller}) => {
  return (
    <div className="killer">
      <div className="killer_name">
        <Portrait name={props.killer.name} icon={props.killer.icon}/>
      </div>
      {props.killer.addons.map((addon: any) => (
        <Addon name={addon.name} icon={addon.icon} rank={addon.rank} />
      ))}
      {props.killer.perks.map((perk: IPerk) => (
        <Perk name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
}

export default KillerPanel;