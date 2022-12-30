import useStateAtoms from '../../../atoms/atoms';
import ModalSelect from '../ModalSelect/ModalSelect';
import ModalTextFields from "../ModalTextFields/ModalTextFields";
import ModalDatePickers from "../ModalDatePickers/ModalDatePickers";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
// import ModalSearchButton from "../ModalSearchButton/ModalSearchButton";
import styles from './Modalindex.module.scss';

export default function ModalIndex(): JSX.Element {
  const { isCountrySearch } = useStateAtoms();

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal_container}>
          <ModalCloseButton />
          <h1>Choose where and when.</h1>
          {
            isCountrySearch ?
              <ModalSelect />
              :
              <ModalTextFields />
          }
          <ModalDatePickers />
          {/* <ModalSearchButton /> */}
        </div>
      </div>
    </>
  );
}
