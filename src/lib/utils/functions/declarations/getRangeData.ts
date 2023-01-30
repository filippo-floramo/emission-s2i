import { EmissionData, TimeRangeOptions } from "../../../../interfaces";

interface DateRange {
   to: number;
   from: number;
}

export const getRangeData = (data: EmissionData[] | null, range: TimeRangeOptions | null): EmissionData[] => {
   if (!data) return [];

   const rangeSelected = getDates(range);

   if (range?.type !== 'max') {
      const filteredData = data?.filter((data: EmissionData) => {
         if (!rangeSelected) return true;

         const date = new Date(data.start).getTime();

         return date >= rangeSelected.from && date <= rangeSelected.to;
      });

      return filteredData;
   } else {
      return data;
   }
};


const getDates = (rangeOption: TimeRangeOptions | null): DateRange | undefined => {
   if (rangeOption && rangeOption.amount) {
      switch (rangeOption.type) {
         case 'year':
            const nowYear = new Date();
            return {
               to: nowYear.getTime(),
               from: nowYear.setFullYear(nowYear.getFullYear() - rangeOption.amount),
            };
         case 'month':
            const nowMonth = new Date();
            return {
               to: nowMonth.getTime(),
               from: nowMonth.setMonth(nowMonth.getMonth() - rangeOption.amount),
            };
      }
   }
};