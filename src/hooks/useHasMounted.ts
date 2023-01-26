import { useState, useEffect } from 'react';

export function useHasMounted(): boolean {
   const [hasMounted, setHasMounted] = useState<boolean>(false);
   useEffect(() => {
      setHasMounted(true);
   }, []);
   return hasMounted;
}