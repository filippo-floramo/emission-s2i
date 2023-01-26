import { useEffect, useState } from "react";


function useMediaQuery(query: string): boolean {

   const [matches, setMatches] = useState<boolean>(false);

   useEffect(() => {
      const media: MediaQueryList = window.matchMedia(query);

      if (media.matches !== matches) {
         setMatches(media.matches);
      }

      const listener = () => {
         setMatches(media.matches);
      };

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
   }, [matches, query]);

   return matches;
}


export const useIsMobile = (): boolean => useMediaQuery('(max-width: 1300px)');
export const useIsDesktop = (): boolean => useMediaQuery('(min-width: 1301px)');