import Select from 'react-select';
import { getCountryCodes } from '../../../lib/fetch/api';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import styles from './ModalSelect.module.scss';
import useEmissionAtoms from '../../../atoms/emissionAtoms';

interface DataTypes {
  label: string;
  value: string;
}

export default function ModalSelect(): JSX.Element {
  const { setEmissionQueries } = useEmissionAtoms();

  const { data, error } = useQuery({
    queryKey: ['countryCodes'],
    queryFn: getCountryCodes,
  });

  const countryOptions: DataTypes[] = useMemo(() => {

    if (!data) return [];

    const filteredCountryCodes: string[] = Object.keys(data || []).filter((key) => {
      return key.length <= 2;
    });

    const options: DataTypes[] = filteredCountryCodes.map((key) => {
      return { label: data[key], value: key };
    });
    console.log('rerendered');

    return options;
  }, [data]);

  if (error) return <div>Data not found</div>;

  return (
    <div className={styles.select}>
      <p>Country</p>

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
        options={countryOptions}
      />
    </div>
  );
}
