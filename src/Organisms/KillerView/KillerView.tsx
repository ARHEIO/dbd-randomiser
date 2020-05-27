import React, { useEffect, useState, ReactElement } from 'react';
import './KillerView.scss';
import { Button } from '@material-ui/core';
import { generateKiller } from '../../Services/generator/generate';
import KillerPanel from '../../Molecules/KillerPanel/KillerPanel';
import Spinner from '../../Atoms/Spinner/Spinner';
import { GeneratedKiller } from '../../Services/generator/models';


const KillerView = (): ReactElement => {
  const [killerDetails, setKillerDetails] = useState<GeneratedKiller | null>(null);

  const getNewKiller = (): void => {
    setKillerDetails(null); // set loading state
    generateKiller().then((response) => setKillerDetails(response.data));
  };

  useEffect(() => {
    generateKiller().then((response) => setKillerDetails(response.data));
  }, []);

  return (
    <div className="killer-container">
      <h2>Killer</h2>
      <div className="killer-toolbar">
        <Button className="btn-generate-killer" variant="contained" color="primary" onClick={getNewKiller}>Generate New Loadout</Button>
        <Button variant="outlined" color="secondary" href="#/survivor">To Survivor Loadout</Button>
      </div>
      { killerDetails && killerDetails.name
        ? <KillerPanel killer={killerDetails} />
        : <Spinner />}
    </div>
  );
};

export default KillerView;
