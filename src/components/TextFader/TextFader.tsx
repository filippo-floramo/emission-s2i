import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './TextFader.module.scss';

interface TextFaderProps {
  sourceText: string[];
}

const FADE_MS = 1200;
const SET_RANDOM_INDEX_MS = FADE_MS * 2;

export default function TextFader({ sourceText }: TextFaderProps) {
  const [countryIndex, setCountryIndex] = useState<number>(0);
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFadeProp({ fade: fadeProp.fade === 'fade-in' ? 'fade-out' : 'fade-in' });
    }, FADE_MS);

    return () => clearInterval(fadeInterval);
  }, [fadeProp]);

  useEffect(() => {
    const radomIndexInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sourceText.length);
      setCountryIndex(randomIndex);
    }, SET_RANDOM_INDEX_MS);

    return () => clearInterval(radomIndexInterval);
  }, [sourceText.length]);

  return <span className={styles[fadeProp.fade]}>{sourceText[countryIndex]}</span>;
}
