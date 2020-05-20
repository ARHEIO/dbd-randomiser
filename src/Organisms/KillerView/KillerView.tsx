import React, { useEffect, useState, ReactElement } from 'react';
import './KillerView.scss';
import { Button } from '@material-ui/core';
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
      <div className="killer-toolbar">
        <Button variant="contained" color="primary" onClick={getNewKiller}>Generate New Loadout</Button>
        <Button variant="outlined" color="secondary" href="#/survivor">To Survivor Loadout</Button>
      </div>
      { killerDetails && killerDetails.name
        ? <KillerPanel killer={killerDetails} />
        : <Spinner />}
    </div>
  );
};

export default KillerView;
