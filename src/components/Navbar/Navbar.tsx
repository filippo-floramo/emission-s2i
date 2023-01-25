import useWindowScrollPositions from "../../hooks/useWindowScrollPosition";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {

   const { scrollY } = useWindowScrollPositions();

   return (
      <nav
         className={`${styles.navbar} ${scrollY ? styles.scrolled : ""}`}>
         <div className={styles.navbar_container}>
            <div className={styles.name}>
               <span className={styles.letter}><Image src="/letter-e.svg" width={20} height={20} alt="Letter e"  /></span>
               <span> mission</span>
            </div>
         </div>
      </nav>
   );
}