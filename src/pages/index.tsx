import styles from '../styles/pages/Home.module.scss';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_text}>
          <h1>This is the app</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, provident adipisci veritatis omnis
            doloribus a! Ex reprehenderit quasi optio. Ullam?
          </p>
        </div>
        <div className={styles.home_buttons}>
          <Link href="/search" className={`${styles.btn} ${styles.search}`}>
            Search
          </Link>
          <Link href="/about" className={`${styles.btn} ${styles.about}`}>
            About
          </Link>
        </div>
      </div>
    </>
  );
}
