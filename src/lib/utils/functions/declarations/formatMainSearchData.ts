import { EmissionData, EmissionQuery } from "../../../../interfaces";

export const formatMainSearchData = (
   mainEmissionData: EmissionData[],
   emissionQueries: EmissionQuery,
): EmissionData[] => {
   const { startDate, endDate } = emissionQueries;

   if (!startDate || !endDate) return [];

   const startDateMs = new Date(startDate).getTime();
   const endDateMs = new Date(endDate).getTime();

   const filteredSearchdata = mainEmissionData.filter((data: EmissionData) => {
      const date = new Date(data.start).getTime();

      return date >= startDateMs && date <= endDateMs;
   });

   return filteredSearchdata;
};