import { motion, Variants } from 'framer-motion';
import useStateAtoms from '../atoms/atoms';
import ModalIndex from '../components/Modal/ModalIndex';
import SearchTypeButton from '../components/SearchTypeButton/SearchTypeButton';
import styles from '../styles/pages/Search.module.scss';

const searchVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.1 },
      y: {
        duration: 0.2,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  },
};

export default function Search(): JSX.Element {
  const { isModalOpen } = useStateAtoms();

  return (
    <>
      {isModalOpen && <ModalIndex />}
      <div className={styles.search}>
        <motion.div
          className={styles.search_container}
          variants={searchVariants}
          initial="hidden"
          animate="animate"
        >
          <h1 className={styles.search_cta}>Search by:</h1>
          <div className={styles.search_buttons}>
            <SearchTypeButton type="Country" />
            <p> or</p>
            <SearchTypeButton type="Coordinates" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
