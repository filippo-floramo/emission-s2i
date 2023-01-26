import { useState, useEffect, useCallback, useRef } from "react";


interface ScrollTypes {
   isScrollUp: boolean;
   scrollY: number;
}

export default function useWindowScrollPositions() {

   const [scrollPosition, setPosition] = useState<ScrollTypes>({ isScrollUp: false, scrollY: 0 });

   const previousScrollY = useRef(0);

   const updatePosition = useCallback(() => {

      const ScrollY: number = window.scrollY;
      const isScrollUp: boolean = previousScrollY.current > ScrollY ? true : false;

      previousScrollY.current = ScrollY;

      setPosition({ isScrollUp, scrollY });
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', updatePosition);

      return () => window.removeEventListener('scroll', updatePosition);
   }, [updatePosition]);

   return scrollPosition;
};