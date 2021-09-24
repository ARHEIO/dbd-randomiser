import Link from 'next/link'


import React from 'react';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.landingContainer}>
    <Link href="/survivor">
      <a className={styles.linkButton}>
        <img alt="survivor" src="https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_survivor.png" />
        <p>Randomise survivor build</p>
      </a>
    </Link>

    <Link href="/killer">
      <a className={styles.linkButton}>
        <img alt="killer" src="https://dqr3pglopijar.cloudfront.net/assets/iconHelpLoading_killer.png" />
        <p>Randomise killer build</p>
      </a>
    </Link>
  </div>
  )
}
