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
          <Portrait name={killerDetails.name} icon={killerDetails.icon}/>
        </div>
        {killerDetails.addons.map((addon: any) => (
          <Addon name={addon.name} icon={addon.icon} rank={addon.rank} />
        ))}
        {killerDetails.perks.map((perk: IPerk) => (
          <Perk name={perk.name} icon={perk.icon} rank={perk.rank} />
        ))}
      </div>}

    </div>
  );
}

export default Killer;
