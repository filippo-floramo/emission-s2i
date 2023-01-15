import { manageData, formatMainSearchData } from '../lib/utils/functions';
import { EmissionData } from '../interfaces/interfaces';
import { atom, useAtom } from 'jotai';
import useStateAtoms from '../atoms/atoms';
import useEmissionAtoms from '../atoms/emissionAtoms';
import axios from 'axios';

interface ApiTypes {
  getEmissionData: () => Promise<void>;
  isDataLoading: boolean;
}

const DataLoading = atom<boolean>(false);

export function useEmissionApi(): ApiTypes {
  const [isDataLoading, setIsDataLoading] = useAtom(DataLoading);

  const { isCountrySearch } = useStateAtoms();
  const { emissionQueries, setMainEmissionData, setTotalEmissionData } = useEmissionAtoms();

  const { countryCode, longitude, latitude } = emissionQueries;

  const currentDate = new Date().toJSON();

  const getEmissionData = async () => {

    let totalDataUrl: string;

    if (isCountrySearch) {
      totalDataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${countryCode}&begin=2019-01-01&end=${currentDate}&offset=0`;
    } else {
      totalDataUrl = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=2019-01-01&end=${currentDate}&offset=0`;
    }

    try {
      setIsDataLoading(true);

      const totalResponse = await axios.get<EmissionData[]>(totalDataUrl);

      const totalData = totalResponse.data;

      const sortedTotalData = manageData(totalData);

      console.log(sortedTotalData);

      setMainEmissionData(formatMainSearchData(sortedTotalData, emissionQueries));
      setTotalEmissionData(sortedTotalData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDataLoading(false);
    }
  };

  return { getEmissionData, isDataLoading };
}
