/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import TextFader from '../components/TextFader/TextFader';
import { getCountryList } from '../lib/fetch/api';
import styles from '../styles/pages/Home.module.scss';

interface HomeProps {
  countries: string[]
}


export default function Home({ countries }: HomeProps): JSX.Element {

  return (
    <div className={styles.home}>
      <div className={styles.home_text}>
        <h1>
          You can't see it, but you can search for it. <br /> See the <span className={styles.co}>CO</span> levels in {<TextFader sourceText={countries} />}
        </h1>
      </div>
      <div className={styles.home_buttons}>
        <Link href="/about" className={styles.btn}>
          What is it all about?
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const countries = await getCountryList();

  return {
    props: {
      countries
    }
  };
};