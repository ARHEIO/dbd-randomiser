import React, { ReactElement } from 'react';
import './Portrait.scss';

const Portrait = (props: { name: string; icon: string }): ReactElement => {
  const { name, icon } = props;
  return (
    <div>
      <p className="name">{name}</p>
      <div className="portrait-icon">
        <img alt={name} src={`https://dqr3pglopijar.cloudfront.net/${icon}`} />
      </div>
    </div>
  );
};

export default Portrait;
