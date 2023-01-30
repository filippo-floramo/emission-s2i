import React from 'react';
import { EmissionData } from '../../../interfaces';
import Tooltip from '../../Tooltip/Tooltip';
import styles from './ChartCounter.module.scss';

interface ChartCounterProps {
  data: EmissionData[];
}

const getMean = (data: EmissionData[]) => {
  let color: string;
  let emoji: string;

  const mean =
    data.reduce((sum, currItem) => {
      return sum + currItem.average;
    }, 0) / data.length;
  const dataMean = Number(mean.toFixed(2));

  if (dataMean < 2.5) {
    color = '#208759';
    emoji = '✅';
  } else if (dataMean < 3.5) {
    color = '#ffc800';
    emoji = '⚠️';
  } else {
    color = 'red';
    emoji = '☠️';
  }

  return { dataMean, color, emoji };
};

export default function ChartCounter({ data }: ChartCounterProps): JSX.Element {
  const { dataMean, color, emoji } = getMean(data);

  return (
    <div className={styles.counter}>
      <span>Total average: </span>
      <Tooltip direction="top" content="Acceptable values are considered to be below 3.5">
        <span style={{ color: color }}>{dataMean}</span> <span>{emoji}</span>
      </Tooltip>
    </div>
  );
}
