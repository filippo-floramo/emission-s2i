import { useMediaQuery } from "../../hooks/useMediaQuery";


/*Resolution Breakpoint for animations */

export const UseIsMobile = (): boolean => useMediaQuery('(max-width: 1300px)');
export const UseIsDesktop = (): boolean => useMediaQuery('(min-width: 1301px)');