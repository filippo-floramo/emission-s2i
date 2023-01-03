import styles from '../styles/pages/Home.module.scss';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_text}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto!</h1>
        </div>
        <div className={styles.home_buttons}>
          <Link href="/about" className={`${styles.btn} ${styles.about}`}>
            What does it mean?
          </Link>
        </div>
      </div>
    </>
  );
}
