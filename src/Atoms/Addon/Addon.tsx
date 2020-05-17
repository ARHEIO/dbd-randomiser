import React from 'react';
import './Addon.scss'
import { Addon as IAddon } from '../../Services/generator/models';
import { colourConfig } from '../color-config';

const Addon = (props: IAddon) => {
  return (
    <div>
      <p className="killer_addons">{props.name}</p>
      <div className="addon-icon" style={{backgroundColor: colourConfig[`${props.rank}`]}}>
        <img alt={`The ${props.name} addon`} src={"https://dqr3pglopijar.cloudfront.net/" + props.icon}/>
      </div>
    </div>
  );
}

export default Addon;