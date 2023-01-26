import axios from 'axios';
import { CountryCodes } from '../../interfaces/interfaces';

interface CountryListTypes {
  label: string;
  value: string;
}

export async function getCountries(): Promise<CountryListTypes[]> {
  try {
    const res = await axios.get<CountryCodes>('https://api.v2.emissions-api.org/api/v2/countries.json');
    const data = res.data;

    const filteredCountryCodes: string[] = Object.keys(data || []).filter((key) => {
      return key.length <= 2;
    });

    const countryList: CountryListTypes[] = filteredCountryCodes.map((key) => {
      return { label: data[key], value: key };
    });

    const sortedCountryList = countryList.sort((a, b) => {
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;

      return 0;
    });

    return sortedCountryList;
  } catch (err) {
    console.error(err);

    return [];
  }
}
