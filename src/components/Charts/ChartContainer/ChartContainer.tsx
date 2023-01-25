import React from 'react';
import styles from './ChartContainer.module.scss';
import { motion, Variants } from "framer-motion";

interface ChartContainerProps {
  children?: React.ReactNode;
}

const ChartContainerVariants: Variants = {

  initial: { scale: 0.8 },
  animate: {
    scale: 1,
    transition: { duration: 0.1 }
  }
};

export default function ChartContainer({ children }: ChartContainerProps): JSX.Element {
  return (
    <motion.div
      className={styles.chart_container}
      variants={ChartContainerVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
