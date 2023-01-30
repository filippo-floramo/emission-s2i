import { useInputHandler } from '../../../hooks/useInputHandler';
import styles from './ModalSearchButton.module.scss';

export default function ModalSearchButton(): JSX.Element {
  const { handleInputs } = useInputHandler();

  return (
        <button
          className={styles.search_modal}
          onClick={() => {
            handleInputs();
          }}>
          Search!
        </button>
  );
}
