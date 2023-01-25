import React from "react";
import { EmissionData } from "../../../interfaces/interfaces";
import styles from './ChartCounter.module.scss';

interface ChartCounterProps {
   data: EmissionData[]
}

const getMean = (data: EmissionData[]) => {
   let color;

   const mean = data.reduce((sum, currItem) => { return (sum + currItem.average); }, 0) / data.length;
   const dataMean = Number(mean.toFixed(2));

   if (dataMean < 2.5) {
      color = "#208759";
   } else if (dataMean < 3.5) {
      color = "#ffc800";
   } else {
      color = "red";
   }

   return { dataMean, color };
};


export default function ChartCounter({ data }: ChartCounterProps): JSX.Element {

   const { dataMean, color } = getMean(data);

   return (
      <div className={styles.counter}>
         Total average: <span style={{ color: color }}>{dataMean}</span>
      </div >
   );
}



