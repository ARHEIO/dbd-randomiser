import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Killer.scss';
import { generateKiller } from '../../Services/generator/generate';


function Killer() {
  const [killerDetails, setKillerDetails] = useState<any>({});

  const getKiller = () => {
    const killer = generateKiller();
    setKillerDetails(killer);
  }
  
  useEffect(() => {
    getKiller();
  }, []);

  return (
    <div className="killer-container">
      <h2>Killer</h2>
      <button onClick={getKiller} >Generate</button>

      {killerDetails && killerDetails.name &&
      <div className="killer">
        <div className="killer_name">
          <p>{killerDetails.name}</p>
          <img src={"https://dqr3pglopijar.cloudfront.net/" + killerDetails.icon}/>
        </div>
        {killerDetails.addons.map((addon: any) => (
          <div>
            <p className="killer_addons">{addon.name}</p>
            <img src="addon.icon"/>
          </div>
        ))}
        {killerDetails.perks.map((perk: any) => (
          <div>
            <p className="killer_perks">{perk.name}</p>
            <img src={"https://dqr3pglopijar.cloudfront.net/" + perk.icon}/>
          </div>
        ))}
      </div>}

    </div>
  );
}

export default Killer;
