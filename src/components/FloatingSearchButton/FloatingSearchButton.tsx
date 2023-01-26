import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWindowScrollPositions } from "../../hooks/useWindowScrollPosition";
import styles from "./FloatingSearchButton.module.scss";


export default function FloatingSearchButton() {

   const { isScrollDown } = useWindowScrollPositions();


   return (
      <Link
         href="/search"
         style={{ transform: isScrollDown ? "translateY(90px)" : "" }}
         className={styles.float_search}
      >
         <Image className={styles.icon} src="/search-icon.svg" alt=" search icon" width={27} height={27} />
      </Link>
   );
}