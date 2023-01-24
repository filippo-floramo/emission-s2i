import React from 'react';
import styles from './ChartContainer.module.scss';

interface ChartContainerProps {
  children?: React.ReactNode;
}

export default function ChartContainer({ children }: ChartContainerProps): JSX.Element {
  return (
    <div className={styles.chart_container}>
      {children}
    </div>
  );
}
