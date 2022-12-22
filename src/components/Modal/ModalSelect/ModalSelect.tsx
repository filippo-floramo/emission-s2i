import Select from 'react-select';
import { getCountryCodes } from "../../../lib/api/api";
import { CountryCodes } from '../../../interfaces/interfaces';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import styles from './ModalSelect.module.scss';



interface DataTypes {
   label: CountryCodes;
   value: string;
}

type SelectTypes = DataTypes | undefined;

export default function ModalSelect(): JSX.Element {
   const { data, error } = useQuery({
      queryKey: ['countryCodes'],
      queryFn: getCountryCodes,
   });

   const countryOptions: SelectTypes[] = useMemo(() => {
      const filteredCountryCodes: string[] = Object.keys(data || []).filter((key) => {
         return key.length <= 2;
      });

      const options: SelectTypes[] = filteredCountryCodes.map((key) => {
         if (data) {
            return { label: data[key as unknown as number], value: key };
         } else {
            return undefined;
         }
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
               console.log(country);
            }}
            isSearchable={true}
            options={countryOptions}
         />
      </div>
   );
}
