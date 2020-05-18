import React, { useEffect, useState } from 'react';
import './Killer.scss';
import { generateKiller, GeneratedKiller } from '../../Services/generator/generate';
import Perk from '../../Atoms/Perk/Perk';
import Addon from '../../Atoms/Addon/Addon';
import Portrait from '../../Atoms/Portrait/Portrait';
import { Perk as IPerk } from '../../Services/generator/models'


function Killer() {
  const [killerDetails, setKillerDetails] = useState<GeneratedKiller|null>(null);

  const getKiller = () => {
    setKillerDetails(null) // set loading state
    generateKiller().then(killer => setKillerDetails(killer))
  };
  
  useEffect(() => {
    getKiller();
  }, []);

  return (
    <div className="killer-container">
      <h2>Killer</h2>
      <button onClick={getKiller} >Generate</button>

      {killerDetails && killerDetails.name
      ? <div className="killer">
        <div className="killer_name">
          <Portrait name={killerDetails.name} icon={killerDetails.icon}/>
        </div>
        {killerDetails.addons.map((addon: any) => (
          <Addon name={addon.name} icon={addon.icon} rank={addon.rank} />
        ))}
        {killerDetails.perks.map((perk: IPerk) => (
          <Perk name={perk.name} icon={perk.icon} rank={perk.rank} />
        ))}
      </div>
      :<div className="survivor loading-spinner-container">
        <div className="loading-spinner">
          <svg className="loading-spinner-rear"><circle cx="50%" cy="50%"  r="18px"/></svg>
          <svg className="loading-spinner-front"><circle cx="50%" cy="50%" r="18px"/></svg>
        </div>
      </div>
      }
    </div>
  );
}

export default Killer;
