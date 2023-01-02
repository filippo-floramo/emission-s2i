import * as React from 'react';

import useStateAtoms from '../../../atoms/atoms';
import useEmissionAtoms from '../../../atoms/emissionAtoms';
import styles from './ModalCloseButton.module.scss';

export default function ModalCloseButton(): JSX.Element {
  const { setIsModalOpen, setIsCountrySearch } = useStateAtoms();
  const { setEmissionQueries } = useEmissionAtoms();

  return (
    <>
      <button
        className={styles.close_button}
        onClick={() => {
          setIsModalOpen(false);
          setIsCountrySearch(null);
          setEmissionQueries({
            countryCode: undefined,
            latitude: undefined,
            longitude: undefined,
            startDate: undefined,
            endDate: undefined,
          });
        }}>
        Close
      </button>
    </>
  );
}
