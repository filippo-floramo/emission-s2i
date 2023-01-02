import { EmissionData } from '../../interfaces/interfaces';
import { TimeRangeOptions } from '../../interfaces/interfaces';

// here goes the time range

interface DateRange {
  to: number;
  from: number;
}

export const getDates = (rangeOption: TimeRangeOptions | null): DateRange | undefined => {
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

export const manageData = (data: EmissionData[]): EmissionData[] => {
  const sortedData = data.slice().sort((a, b): number => {
    const first = a.start.match(/[0-9]+/g)?.join('');
    const second = b.start.match(/[0-9]+/g)?.join('');

    return Number(first) - Number(second);
  });

  const formattedData: EmissionData[] = sortedData.map((data) => {
    const unfixedAverage = data.average;
    const unformattedEnd = data.end;
    const unformattedStart = data.start;

    const average = Number(unfixedAverage.toFixed(4));
    const start = formatDate(unformattedStart);
    const end = formatDate(unformattedEnd);

    return { average, end, start };
  });

  return formattedData;
};

export const getRangeData = (data: EmissionData[] | null, range: TimeRangeOptions | null): EmissionData[] | undefined | null => {

  if (range?.type !== 'max') {
    const filteredData = data?.filter((data: EmissionData) => {
      const rangeSelected = getDates(range);

      if (!rangeSelected) return true;

      const date = new Date(data.start).getTime();

      return date >= rangeSelected.from && date <= rangeSelected.to;
    });

    return filteredData;
  } else {

    return data;
  }
};

const formatDate = (date: string): string => {
  const fullDate = new Date(date);
  const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()} `;

  return dateFormatted;
};

