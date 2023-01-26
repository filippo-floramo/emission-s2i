import { useState, useEffect, useCallback, useRef } from "react";


interface ScrollTypes {
   isScrollDown: boolean;
   scrollY: number;
}

export function useWindowScrollPositions() {

   const [scrollPosition, setPosition] = useState<ScrollTypes>({ isScrollDown: false, scrollY: 0 });

   const previousScrollY = useRef(0);

   const updatePosition = useCallback(() => {

      const ScrollY: number = window.scrollY;
      const isScrollDown: boolean = previousScrollY.current < ScrollY ? true : false;

      previousScrollY.current = ScrollY;

      setPosition({ isScrollDown, scrollY });
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', updatePosition);

      return () => window.removeEventListener('scroll', updatePosition);
   }, [updatePosition]);

   return scrollPosition;
};