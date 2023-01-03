import * as React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.scss";

export default function Navbar() {

   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar_container}>
            <div className={styles.name}>
               <span>e</span>
               <span> - mission</span>
            </div>
            <Link href="/search" className={styles.search}>
               Search
            </Link>
         </div>
      </nav>
   );
}