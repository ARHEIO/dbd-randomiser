import React from 'react';
import './Perk.scss'
import { Perk as IPerk } from '../../Services/generator/models';
import { colourConfig } from '../color-config';

const Perk = (props: IPerk) => {
  return (
    <div className="perk">
      <p className="killer_perks">{props.name}</p>
      <div className="perk-icon" style={{backgroundColor: colourConfig[`${props.rank}`]}}>
        <img alt={props.name} src={"https://dqr3pglopijar.cloudfront.net/" + props.icon}/>
      </div>
    </div>
  );
}

export default Perk;