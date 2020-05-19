import React, { ReactElement } from 'react';
import './Addon.scss';
import { Addon as IAddon } from '../../Services/generator/models';
import colourConfig from '../color-config';

const Addon = (props: IAddon): ReactElement => {
  const { name, rank, icon } = props;

  return (
    <div>
      <p className="killer_addons">{name}</p>
      <div className="addon-icon" style={{ backgroundColor: colourConfig[`${rank}`] }}>
        <img alt={`The ${name} addon`} src={`https://dqr3pglopijar.cloudfront.net/${icon}`} />
      </div>
    </div>
  );
};

export default Addon;
