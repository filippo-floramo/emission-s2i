import { EmissionData } from "../../../../interfaces";

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


 const formatDate = (date: string): string => {
   const fullDate = new Date(date);
   const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()} `;
 
   return dateFormatted;
 };