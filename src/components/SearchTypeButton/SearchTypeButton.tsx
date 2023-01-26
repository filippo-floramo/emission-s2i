import * as React from 'react';
import useEmissionAtoms from '../../atoms/emissionAtoms';
import useStateAtoms from '../../atoms/atoms';
import styles from './SearchTypeButton.module.scss';

interface SearchTypeButtonProps {
  type: string;
}

export default function SearchTypeButton({ type }: SearchTypeButtonProps) {
  const { setIsCountrySearch, setIsModalOpen } = useStateAtoms();
  const { setEmissionQueries, setTotalEmissionData, setMainEmissionData } = useEmissionAtoms();

  return (
    <button
      className={styles.search_btn}
      onClick={() => {
        setIsCountrySearch(type === 'Country' ? true : false);
        setIsModalOpen(true);
        setEmissionQueries({
          countryCode: undefined,
          latitude: undefined,
          longitude: undefined,
          startDate: undefined,
          endDate: undefined,
        });
        setMainEmissionData(null);
        setTotalEmissionData(null);
      }}>
      {type}
    </button>
  );
}
