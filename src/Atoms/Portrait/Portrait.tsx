import React from 'react';
import './Portrait.scss'

const Perk = (props: {name: string; icon: string}) => {
  return (
    <div>
      <p className="name">{props.name}</p>
      <div className="portrait-icon">
        <img alt={props.name}src={"https://dqr3pglopijar.cloudfront.net/" + props.icon}/>
      </div>
    </div>
  );
}

export default Perk;