import { useWindowScrollPositions } from "../../hooks/useWindowScrollPosition";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {

   const { scrollY } = useWindowScrollPositions();

   return (
      <nav
         className={`${styles.navbar} ${scrollY ? styles.scrolled : ""}`}>
         <div className={styles.navbar_container}>
            <Link href="/" className={`${styles.name} ${scrollY ? styles.scrolled : ""}`}>
               <span className={styles.letter}>
                  <Image src="/letter-e.svg" width={20} height={20} alt="Letter e" />
               </span>
               <span>mission</span>
            </Link>
         </div>
      </nav>
   );
}