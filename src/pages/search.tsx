import useStateAtoms from '../atoms/atoms';
import ModalIndex from '../components/Modal/ModalIndex';
import SearchTypeButton from '../components/SearchTypeButton/SearchTypeButton';
import styles from '../styles/pages/Search.module.scss';

export default function Search(): JSX.Element {
  const { isModalOpen } = useStateAtoms();

  return (
    <>
      {isModalOpen && <ModalIndex />}
      <div className={styles.search}>
        <div className={styles.search_container}>
          <h1 className={styles.search_cta}>Search by:</h1>
          <div className={styles.search_buttons}>
            <SearchTypeButton type="Country" />
            <p> or</p>
            <SearchTypeButton type="Coordinates" />
          </div>
        </div>
      </div>
    </>
  );
}
