import React, { useState, useEffect, ReactElement } from 'react';
import './SurvivorView.scss';
import { Button } from '@material-ui/core';
import { generateSurvivor } from '../../Services/generator/generateLoadoutApi';
import SurvivorPanel from '../../Molecules/SurvivorPanel/SurvivorPanel';
import Spinner from '../../Atoms/Spinner/Spinner';
import { GeneratedSurvivor } from '../../Services/generator/models';

const SurvivorView = (): ReactElement => {
  const [survivorDetails, setSurvivorDetails] = useState<GeneratedSurvivor | null>(null);

  const getNewSurvivor = (): void => {
    setSurvivorDetails(null); // set loading state
    generateSurvivor().then((response) => setSurvivorDetails(response.data));
  };

  useEffect(() => {
    generateSurvivor().then((response) => setSurvivorDetails(response.data));
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
