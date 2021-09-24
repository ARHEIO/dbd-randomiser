import React, { useEffect, useState } from 'react';
import deadByDaylight from '@stephenpoole/deadbydaylight';
import { KillerPanel } from '../../components/LoadoutPanel';
import { generateKillerLoadout } from '../../src/api';
import { Button, Container } from '@material-ui/core';
import styles from './killer.module.scss';
import Link from 'next/link';

const Survivor: React.VFC = () => {
  const [loadout, setLoadout] = useState<ReturnType<typeof generateKillerLoadout> | null>(null);
  const client = deadByDaylight();

  useEffect(() => {
    setLoadout(generateKillerLoadout(client));
  }, []);

  if (!loadout?.name) {
    return (<p>Loading...</p>)
  }

  return (
    <Container maxWidth="lg">
      <div className={styles.toolbar}>
        <Button size='large' variant="contained" color='primary' onClick={() => setLoadout(generateKillerLoadout(client))}>Generate new loadout</Button>
        <Link href="/survivor">
          <Button size='large' variant="outlined" color='secondary'>To Survivor Loadout</Button>
        </Link>
      </div>
      <KillerPanel loadout={loadout} />
    </ Container>
  );
};

export default Survivor;
