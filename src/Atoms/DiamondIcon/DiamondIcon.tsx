import React, { ReactElement } from 'react';
import './DiamondIcon.scss';
import { BasicObject } from '../../Services/generator/models';
import colourConfig from '../color-config';
import getAssetLocation from '../../Services/utils';

// TODO: Find a way to have a placeholder spinner component for the image

const DiamondIcon = (props: BasicObject): ReactElement => {
  const { name, rank, icon } = props;
  const backgroundcolor = rank ? colourConfig[`${rank}`] : '#61513C';

  return (
    <div className="diamond-icon">
      <p className="diamond-icon_name">{name}</p>
      <div className="diamond-icon_icon" style={{ backgroundColor: backgroundcolor }}>
        <img alt={name} src={getAssetLocation(icon)} />
      </div>
    </div>
  );
};

export default DiamondIcon;
