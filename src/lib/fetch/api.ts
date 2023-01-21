import axios from 'axios';
import { CountryCodes } from '../../interfaces/interfaces';


interface CountryList {
  Code: string,
  Name: string
}

export function getCountryCodes(): Promise<CountryCodes> {
  const countryCodes = axios
    .get<CountryCodes>('https://api.v2.emissions-api.org/api/v2/countries.json')
    .then((res) => res.data);

  return countryCodes;
}


export async function getCountryList() {
  try {
    const res = await axios.get<CountryList[]>(
      "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json",
      { headers: { 'Accept-Encoding': 'gzip,deflate,compress' } }
    );

    const countryList = res.data.map((country) => {
      const splittedCountry = country.Name.split(",");

      return splittedCountry[0];
    });

    return countryList;
  } catch (error) {
    console.error(error);
    
    return [];
  }

}