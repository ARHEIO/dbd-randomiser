import React, { ReactElement } from 'react';
import './Perk.scss';
import { Perk as IPerk } from '../../Services/generator/models';
import colourConfig from '../color-config';

const Perk = (props: IPerk): ReactElement => {
  const { name, rank, icon } = props;
  return (
    <div className="perk">
      <p className="killer_perks">{name}</p>
      <div className="perk-icon" style={{ backgroundColor: colourConfig[`${rank}`] }}>
        <img alt={name} src={`https://dqr3pglopijar.cloudfront.net/${icon}`} />
      </div>
    </div>
  );
};

export default Perk;
