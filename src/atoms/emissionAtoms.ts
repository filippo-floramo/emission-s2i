import { atom, useAtom, SetStateAction } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { EmissionData } from "../interfaces/interfaces";


interface EmissionAtoms {
   emissionQueries: EmissionQuery,
   setEmissionQueries: (update: SetStateAction<EmissionQuery>) => void,
   mainEmissionData: EmissionData[] | null,
   setMainEmissionData: (update: SetStateAction<EmissionData[] | null>) => void,
   totalEmissionData: EmissionData[] | null,
   setTotalEmissionData: (update: SetStateAction<EmissionData[] | null>) => void,
}


interface EmissionQuery {
   countryCode: string | undefined,
   latitude: string | undefined,
   longitude: string | undefined,
   startDate: string | undefined,
   endDate: string | undefined,
}


const emissionQuery = atom<EmissionQuery>({
   countryCode: undefined,
   latitude: undefined,
   longitude: undefined,
   startDate: undefined,
   endDate: undefined,
});

const mainData = atomWithStorage<EmissionData[] | null>('main-data', null);
const totalData = atomWithStorage<EmissionData[] | null>('total-data', null);

export default function useEmissionAtoms(): EmissionAtoms {

   const [emissionQueries, setEmissionQueries] = useAtom(emissionQuery);

   const [mainEmissionData, setMainEmissionData] = useAtom(mainData);
   const [totalEmissionData, setTotalEmissionData] = useAtom(totalData);


   return {
      emissionQueries,
      setEmissionQueries,
      mainEmissionData,
      setMainEmissionData,
      totalEmissionData,
      setTotalEmissionData,
   };
}
