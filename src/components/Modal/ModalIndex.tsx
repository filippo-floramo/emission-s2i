import useStateAtoms from '../../atoms/atoms';
import ModalSelect from './ModalSelect/ModalSelect';
import ModalTextFields from './ModalTextFields/ModalTextFields';
import ModalDatePickers from './ModalDatePickers/ModalDatePickers';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalSearchButton from './ModalSearchButton/ModalSearchButton';
import { motion, Variants } from 'framer-motion';
import styles from './ModalIndex.module.scss';


const ModalVariants: Variants = {
  initial: { scale: 0.7 },
  animate: {
    scale: 1,
    transition: { duration: 0.2 }
  },
  exit: {
    scale: 0.1,
    transition: { duration: 0.5 },
  }
};

export default function ModalIndex(): JSX.Element {
  const { isCountrySearch } = useStateAtoms();

  return (
    <motion.div
      className={styles.backdrop}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className={styles.modal_container}
        variants={ModalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ModalCloseButton />
        <h1>Choose where and when.</h1>
        {isCountrySearch ? <ModalSelect /> : <ModalTextFields />}
        <ModalDatePickers />
        <ModalSearchButton />
      </motion.div>
    </motion.div>
  );
}
