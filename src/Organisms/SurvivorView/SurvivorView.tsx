import React, { useState, useEffect, ReactElement } from 'react';
import './SurvivorView.scss';
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
      <button type="button" className="btn-generate-survivor" onClick={getNewSurvivor}>Generate</button>

      {survivorDetails && survivorDetails.item
        ? <SurvivorPanel survivor={survivorDetails} />
        : <Spinner />}
    </div>
  );
};

export default SurvivorView;
