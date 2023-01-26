import { useState } from 'react';
import styles from "./Tooltip.module.scss";

interface TootipProps {
   children?: React.ReactNode;
   delay?: number;
   direction: string;
   content: string | JSX.Element
}


export default function Tooltip(props: TootipProps) {
   let timeout: NodeJS.Timer;
   const [active, setActive] = useState(false);

   const showTip = () => {
      timeout = setTimeout(() => {
         setActive(true);
      }, props.delay || 400);
   };

   const hideTip = () => {
      clearInterval(timeout);
      setActive(false);
   };

   return (
      <div
         className={styles.tooltip_wrapper}
         // When to show the tooltip
         onMouseEnter={showTip}
         onMouseLeave={hideTip}
      >
         {/* Wrapping */}
         {props.children}
         {active && (
            <div className={`${styles.tooltip_tip} ${styles[props.direction || "top"]}`}>
               {/* Content */}
               {props.content}
            </div>
         )}
      </div>
   );
}