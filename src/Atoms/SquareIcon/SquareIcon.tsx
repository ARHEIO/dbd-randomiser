import React, { ReactElement } from 'react';
import './SquareIcon.scss';
import colourConfig from '../color-config';
import { BasicObject } from '../../Services/generator/models';
import getAssetLocation from '../../Services/utils';

// TODO: Find a way to have a placeholder spinner component for the image

const SquareIcon = (props: BasicObject): ReactElement => {
  const { name, rank, icon } = props;
  const backgroundcolor = rank ? colourConfig[`${rank}`] : '#61513C';

  return (
    <div className="square-icon">
      <p className="square-icon_name">{name}</p>
      <div className="square-icon_icon" style={{ backgroundColor: backgroundcolor }}>
        <img alt={name} src={getAssetLocation(icon)} />
      </div>
    </div>
  );
};

export default SquareIcon;
