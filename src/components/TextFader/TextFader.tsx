import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHasMounted } from '../../hooks/useHasMounted';
import styles from './TextFader.module.scss';

interface TextFaderProps {
  sourceText: string[];
}

const FADE_MS = 1200;
const SET_RANDOM_INDEX_MS = FADE_MS * 2;

export default function TextFader({ sourceText }: TextFaderProps) {
  const hasMounted = useHasMounted();
  const [countryIndex, setCountryIndex] = useState<number>(Math.floor(Math.random() * sourceText.length));
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


  if (!hasMounted) return <></>;

  return <span style={{ display: "inline-block" }} className={styles[fadeProp.fade]}>{sourceText[countryIndex]}</span>;
}
