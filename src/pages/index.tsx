/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import TextFader from '../components/TextFader/TextFader';
import { getCountries } from '../lib/fetch/api';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Home.module.scss';

interface HomeProps {
  countries: string[]
}

const HomeVariants = {
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      opacity: { duration: 0.3 },
      y: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }
  }
};

export default function Home({ countries }: HomeProps): JSX.Element {


  return (
    <div className={styles.home}>
      <motion.div className={styles.home_container}
        variants={HomeVariants}
        exit="exit"
      >
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
      </motion.div>
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