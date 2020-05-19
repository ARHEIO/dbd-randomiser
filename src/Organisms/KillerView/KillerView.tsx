import React, { useEffect, useState, ReactElement } from 'react';
import './KillerView.scss';
import { generateKiller, GeneratedKiller } from '../../Services/generator/generate';
import KillerPanel from '../../Molecules/KillerPanel/KillerPanel';
import Spinner from '../../Atoms/Spinner/Spinner';


const KillerView = (): ReactElement => {
  const [killerDetails, setKillerDetails] = useState<GeneratedKiller | null>(null);

  const getNewKiller = (): void => {
    setKillerDetails(null); // set loading state
    generateKiller().then((killer) => setKillerDetails(killer));
  };

  useEffect(() => {
    generateKiller().then((killer) => setKillerDetails(killer));
  }, []);

  return (
    <div className="killer-container">
      <h2>Killer</h2>
      <button type="button" className="btn-generate-killer" onClick={getNewKiller}>Generate</button>
      { killerDetails && killerDetails.name
        ? <KillerPanel killer={killerDetails} />
        : <Spinner />}
    </div>
  );
};

export default KillerView;
