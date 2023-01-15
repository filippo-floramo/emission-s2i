/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/pages/Home.module.scss';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';


export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <div className={styles.home_text}>
        <h1>You can't see it, but you can search for it. <br /> See the <span className={styles.co}>CO</span> levels in LoL</h1>
      </div>
      <div className={styles.home_buttons}>
        <Link href="/about" className={`${styles.btn} ${styles.about}`}>
          What is it all about?
        </Link>
      </div>
    </div>
  );
}
