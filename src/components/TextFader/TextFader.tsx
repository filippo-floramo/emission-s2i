import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from "./TextFader.module.scss";


interface TextFaderProps {
   sourceText: string[]
}

export default function TextFader({ sourceText }: TextFaderProps) {

   const [countryIndex, setCountryIndex] = useState<number>(0);
   const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });

   useEffect(() => {
      const fadeInterval = setInterval(() => {
         setFadeProp({ fade: fadeProp.fade === "fade-in" ? "fade-out" : "fade-in" });
      }, 1200);

      return () => clearInterval(fadeInterval);
   }, [fadeProp]);

   useEffect(() => {
      const interval = setInterval(() => {
         const randomIndex = Math.floor(Math.random() * sourceText.length);
         setCountryIndex(randomIndex);
      }, 2400);

      return () => clearInterval(interval);
   }, [sourceText.length]);

   return (
      <span className={styles[fadeProp.fade]}>{sourceText[countryIndex]}</span>
   );
}