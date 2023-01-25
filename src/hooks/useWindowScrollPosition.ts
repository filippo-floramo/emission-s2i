import { useState, useEffect } from "react";


interface ScrollTypes {
   scrollX: number;
   scrollY: number;
}

export default function useWindowScrollPositions() {

   const [scrollPosition, setPosition] = useState<ScrollTypes>({ scrollX: 0, scrollY: 0 });

   useEffect(() => {
      function updatePosition() {
         setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
      }

      window.addEventListener('scroll', updatePosition);
      updatePosition();

      return () => window.removeEventListener('scroll', updatePosition);
   }, []);

   return scrollPosition;
};