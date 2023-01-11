import axios from 'axios';
import { CountryCodes } from '../../interfaces/interfaces';

export function getCountryCodes(): Promise<CountryCodes> {
  const countryCodes = axios
    .get<CountryCodes>('https://api.v2.emissions-api.org/api/v2/countries.json')
    .then((res) => res.data);

  return countryCodes;
}
