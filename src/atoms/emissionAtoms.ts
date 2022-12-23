import { atom, useAtom, SetStateAction } from "jotai";



interface EmissionAtoms {
   emissionQueries: EmissionQuery,
   setEmissionQueries: (update: SetStateAction<EmissionQuery>) => void
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

export default function useEmissionAtoms(): EmissionAtoms {

   const [emissionQueries, setEmissionQueries] = useAtom(emissionQuery);

   return {
      emissionQueries,
      setEmissionQueries
   };
}
