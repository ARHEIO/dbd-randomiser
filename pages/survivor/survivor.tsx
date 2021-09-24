import React, { useEffect, useState } from 'react';
import deadByDaylight from '@stephenpoole/deadbydaylight';
import { SurvivorPanel } from '../../components/LoadoutPanel';
import { generateSurvivorLoadout } from '../../src/api';
import { Button, Container } from '@material-ui/core';
import styles from './survivor.module.scss';
import Link from 'next/link';

const Survivor: React.VFC = () => {
  const [loadout, setLoadout] = useState<ReturnType<typeof generateSurvivorLoadout> | null>(null);
  const client = deadByDaylight();

  useEffect(() => {
    setLoadout(generateSurvivorLoadout(client));
  }, []);

  if (!loadout?.name) {
    return (<p>Loading...</p>)
  }

  return (
    <Container maxWidth="lg">
      <div className={styles.toolbar}>
        <Button size='large' variant="contained" color='primary' onClick={() => setLoadout(generateSurvivorLoadout(client))}>Generate new loadout</Button>
        <Link href="/killer">
          <Button size='large' variant="outlined" color='secondary'>To Killer Loadout</Button>
        </Link>
      </div>
      <SurvivorPanel loadout={loadout} />
  </ Container>
  );
};

export default Survivor;
