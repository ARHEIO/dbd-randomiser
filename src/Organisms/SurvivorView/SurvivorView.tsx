import React, { useState, useEffect, ReactElement } from 'react';
import './SurvivorView.scss';
import { Button } from '@material-ui/core';
import { generateSurvivor, GeneratedSurvivor } from '../../Services/generator/generate';
import SurvivorPanel from '../../Molecules/SurvivorPanel/SurvivorPanel';
import Spinner from '../../Atoms/Spinner/Spinner';

const SurvivorView = (): ReactElement => {
  const [survivorDetails, setSurvivorDetails] = useState<GeneratedSurvivor | null>(null);

  const getNewSurvivor = (): void => {
    setSurvivorDetails(null); // set loading state
    generateSurvivor().then((survivor) => setSurvivorDetails(survivor));
  };

  useEffect(() => {
    generateSurvivor().then((survivor) => setSurvivorDetails(survivor));
  }, []);

  return (
    <div className="survivor-container">
      <h2>Survivor</h2>
      <div className="survivor-toolbar">
        <Button className="btn-generate-survivor" variant="contained" color="primary" onClick={getNewSurvivor}>Generate New Loadout</Button>
        <Button variant="outlined" color="secondary" href="#/killer">To Killer Loadout</Button>
      </div>
      {survivorDetails && survivorDetails.item
        ? <SurvivorPanel survivor={survivorDetails} />
        : <Spinner />}
    </div>
  );
};

export default SurvivorView;
