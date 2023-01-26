import Select from 'react-select';
import { getCountries } from '../../../lib/fetch/api';
import { useQuery } from '@tanstack/react-query';
import styles from './ModalSelect.module.scss';
import useEmissionAtoms from '../../../atoms/emissionAtoms';

export default function ModalSelect(): JSX.Element {
  const { setEmissionQueries } = useEmissionAtoms();

  const { data, error } = useQuery({
    queryKey: ['countryCodes'],
    queryFn: getCountries,
  });

  if (error) return <div>Data not found</div>;

  return (
    <div className={styles.select}>
      <Select
        name="country"
        className={styles.country_select}
        placeholder="Select a country..."
        onChange={(country) => {
          setEmissionQueries((prev) => {
            return {
              ...prev,
              countryCode: country?.value,
            };
          });
        }}
        isSearchable={true}
        options={data}
      />
    </div>
  );
}
