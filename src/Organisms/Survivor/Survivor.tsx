import React, { useState, useEffect } from 'react';
import './Survivor.scss';
import { generateSurvivor } from '../../Services/generator/generate';
import { Perk as IPerk } from '../../Services/generator/models'
import Perk from '../../Atoms/Perk/Perk';

function Survivor() {
  const [survivorDetails, setSurvivorDetails] = useState<any>({});

  const getSurvivor = () => {
    setSurvivorDetails(generateSurvivor());
  }
  
  useEffect(() => { 
    setSurvivorDetails(generateSurvivor())
  }, []);

  return (
    <div className="survivor-container">
      <h2>Survivor</h2>
      <button onClick={getSurvivor} >Generate</button>

      {survivorDetails && survivorDetails.item
      ? <div className="survivor">
        <div className="survivor_name">
          <p>{survivorDetails.item.name}</p>
          <img alt={survivorDetails.item.name} src={"https://dqr3pglopijar.cloudfront.net/" + survivorDetails.item.icon}/>
        </div>
        {survivorDetails.addons.map((addon: any) => (
          <div>
            <p className="survivor_addons">{addon.name}</p>
            <img alt={`The ${addon.name} addon`} src="addon.icon"/>
          </div>
        ))}
        {survivorDetails.perks.map((perk: IPerk) => (
          <Perk name={perk.name} icon={perk.icon} rank={perk.rank} />
        ))}
      </div>
      :<div className="loading-spinner-container">
        <div className="loading-spinner">
          <svg className="loading-spinner-rear"><circle cx="50%" cy="50%"  r="18px"/></svg>
          <svg className="loading-spinner-front"><circle cx="50%" cy="50%" r="18px"/></svg>
        </div>
      </div>
      }
    </div>
  );
}

export default Survivor;
