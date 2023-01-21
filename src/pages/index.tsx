/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import TextFader from '../components/TextFader/TextFader';
import { getCountries } from '../lib/fetch/api';
import styles from '../styles/pages/Home.module.scss';

interface HomeProps {
  countries: string[]
}


export default function Home({ countries }: HomeProps): JSX.Element {


  return (
    <div className={styles.home}>
      <div className={styles.home_text}>
        <h1>
          You can't see it, but you can search for it. <br /> See the <span className={styles.co}>CO</span> levels in <span style={{ color: "green" }}>{<TextFader sourceText={countries} />}</span>
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

  const countryList = await getCountries();

  const countries = countryList.map((country) => country.label);

  return {
    props: {
      countries
    }
  };
};