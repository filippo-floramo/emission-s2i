import useStateAtoms from '../atoms/atoms';
import styles from '../styles/pages/Search.module.scss';
import ModalIndex from '../components/Modal/ModalIndex/ModalIndex';
import useEmissionAtoms from '../atoms/emissionAtoms';

export default function Search(): JSX.Element {
  const { setIsCountrySearch, setIsModalOpen, isModalOpen } = useStateAtoms();
  const { setEmissionQueries } = useEmissionAtoms();

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
              setEmissionQueries({
                countryCode: undefined,
                latitude: undefined,
                longitude: undefined,
                startDate: undefined,
                endDate: undefined,
              });
            }}>
            Country
          </button>
          <p>or</p>
          <button
            className={styles.search_btn}
            onClick={() => {
              setIsCountrySearch(false);
              setIsModalOpen(true);
              setEmissionQueries({
                countryCode: undefined,
                latitude: undefined,
                longitude: undefined,
                startDate: undefined,
                endDate: undefined,
              });
            }}>
            Coordinates
          </button>
        </div>
      </div>
    </>
  );
}
