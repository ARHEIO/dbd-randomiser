import React from 'react';
import './SurvivorPanel.scss';

import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';

import { Perk as IPerk } from '../../Services/generator/models'
import { GeneratedSurvivor } from '../../Services/generator/generate';

const SurvivorPanel = (props: {survivor: GeneratedSurvivor}) => {
  return (
    <div className="survivor">
      <div className="survivor_name">
        <Portrait name={props.survivor.name} icon={props.survivor.icon}/>
      </div>
      <div className="survivor_item">
        <Addon name={props.survivor.item.name} icon={props.survivor.item.icon} rank={props.survivor.item.rank} />
      </div>
      {props.survivor.addons.length > 0
        ? props.survivor.addons.map((addon: any) => (
            <Addon name={addon.name} icon={addon.icon} rank={addon.rank} />
          ))
        : <div style={{gridColumn : 'span 2'}}></div>}
      {props.survivor.perks.map((perk: IPerk) => (
        <Perk name={perk.name} icon={perk.icon} rank={perk.rank} />
      ))}
    </div>
  );
}
export default SurvivorPanel;