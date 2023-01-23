import { useEmissionApi } from '../../../hooks/useEmissionApi';
import { useInputHandler } from '../../../hooks/useInputHandler';
import styles from "./ModalSearchButton.module.scss";


export default function ModalSearchButton(): JSX.Element {
  const { isDataLoading } = useEmissionApi();
  const { handleInputs } = useInputHandler();

  return (
    <>
      {isDataLoading ? (
        <>Loading..</>
      ) : (
        <button
          className={styles.search_modal}
          onClick={() => {
            handleInputs();
          }}>
          Search!
        </button>
      )}
    </>
  );
}
