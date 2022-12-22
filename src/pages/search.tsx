import useStateAtoms from '../atoms/atoms';
import styles from '../styles/pages/Search.module.scss';
import ModalIndex from '../components/Modal/ModalIndex/ModalIndex';

export default function Search(): JSX.Element {
  const { setIsCountrySearch, setIsModalOpen, isModalOpen } = useStateAtoms();

  return (
    <>
      {isModalOpen && <ModalIndex />}
      <div className={styles.search}>
        <h1 className={styles.search_cta}>Search by:</h1>
        <div className={styles.search_buttons}>
          <button
            className={styles.search_btn}
            onClick={() => {
              setIsCountrySearch(true);
              setIsModalOpen(true);
            }}>
            Country
          </button>
          <p>or</p>
          <button
            className={styles.search_btn}
            onClick={() => {
              setIsCountrySearch(false);
              setIsModalOpen(true);
            }}>
            Coordinates
          </button>
        </div>
      </div>
    </>
  );
}
