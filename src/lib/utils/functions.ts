import { EmissionData, EmissionQuery, TimeRangeOptions } from '../../interfaces';

interface DateRange {
  to: number;
  from: number;
}

// FUNCTION TO **NOT** BE EXPORTED

const formatDate = (date: string): string => {
  const fullDate = new Date(date);
  const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()} `;

  return dateFormatted;
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

// FUNCTIONS TO BE EXPORTED

export const manageData = (data: EmissionData[]): EmissionData[] => {
  const sortedData = data.sort((a, b): number => {
    const first = new Date(a.start).getTime();
    const second = new Date(b.start).getTime();

    return first - second;
  });

  const formattedData: EmissionData[] = sortedData.map((data) => {
    const unfixedAverage = data.average;
    const unformattedEnd = data.end;
    const unformattedStart = data.start;

    const average = Number((unfixedAverage * 100).toFixed(3));
    const start = formatDate(unformattedStart);
    const end = formatDate(unformattedEnd);

    return { average, end, start };
  });

  return formattedData;
};

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
