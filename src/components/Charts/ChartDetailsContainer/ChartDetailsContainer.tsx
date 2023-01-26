import * as React from 'react';
import styles from './ChartDetailsContainer.module.scss';

interface ChartDetailsContainerProps {
  typeResult: string;
  children?: React.ReactNode;
}

export default function ChartDetailsContainer({ children, typeResult }: ChartDetailsContainerProps) {
  return (
    <div className={styles.details}>
      <h3>{typeResult}</h3>
      <div className={styles.details_content}>{children}</div>
    </div>
  );
}
