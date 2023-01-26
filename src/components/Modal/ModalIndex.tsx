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
    transition: {
      scale: {
        duration: 0.3,
        ease: 'backOut',
      },
    },
  },
};

export default function ModalIndex(): JSX.Element {
  const { isCountrySearch } = useStateAtoms();

  return (
    <div className={styles.backdrop}>
      <motion.div className={styles.modal_container} variants={ModalVariants} initial="initial" animate="animate">
        <ModalCloseButton />
        <h1>Choose where and when.</h1>
        {isCountrySearch ? <ModalSelect /> : <ModalTextFields />}
        <ModalDatePickers />
        <ModalSearchButton />
      </motion.div>
    </div>
  );
}
