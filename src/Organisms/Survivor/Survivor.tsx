import React, { useState, useEffect } from 'react';
import './Survivor.scss';
import { generateSurvivor } from '../../Services/generator/generate';
import { Perk as IPerk } from '../../Services/generator/models'
import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';

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
        <Portrait name={survivorDetails.name} icon={survivorDetails.icon}/>
        </div>
        <div className="survivor_item">
          <Addon name={survivorDetails.item.name} icon={survivorDetails.item.icon} rank={survivorDetails.item.rank} />
        </div>
        {survivorDetails.addons.length > 0 ? survivorDetails.addons.map((addon: any) => (
          <Addon name={addon.name} icon={addon.icon} rank={addon.rank} />
        )): <div style={{gridColumn : 'span 2'}}></div>}
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
