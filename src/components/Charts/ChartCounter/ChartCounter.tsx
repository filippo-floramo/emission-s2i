import React from "react";
import { EmissionData } from "../../../interfaces/interfaces";
import styles from './ChartCounter.module.scss';

interface ChartCounterProps {
   data: EmissionData[]
}




export default function ChartCounter({ data }: ChartCounterProps): JSX.Element {

   const mean = data.reduce((sum, currItem) => { return (sum + currItem.average); }, 0) / data.length;

   const floated = mean * 100;
   return (
      <div className={styles.counter}>
         {`Total average: ${floated.toFixed(2)} ⋅ 10⁻² mol/m²`}
      </div>
   );
}



