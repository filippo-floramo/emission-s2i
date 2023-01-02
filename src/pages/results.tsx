import React from 'react';
import MainChart from '../components/Charts/MainChart';
import TotalDataChart from "../components/Charts/TotalDataChart";
import styles from '../styles/pages/Results.module.scss';

export default function Results(): JSX.Element {
  return (
    <>
      <div className={styles.results}>
        <MainChart />
        <TotalDataChart />
        {/* <FloatingSearchButton /> */}
        risultino
      </div>
    </>
  );
}
