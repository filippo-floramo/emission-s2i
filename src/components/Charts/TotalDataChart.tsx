import { useMemo } from 'react';
import { getRangeData } from "../../lib/utils/functions";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { timeRangeOptions } from "../../lib/utils/miscellaneous";
import ChartContainer from "./ChartContainer/ChartContainer";
import ChartCounter from "./ChartCounter/ChartCounter";
import useStateAtoms from "../../atoms/atoms";
import Select from "react-select";
import useEmissionAtoms from '../../atoms/emissionAtoms';


export default function TotalDataChart(): JSX.Element {
   const { timeRange, setTimeRange } = useStateAtoms();
   const { totalEmissionData } = useEmissionAtoms();

   const selectableData = useMemo(() => getRangeData(totalEmissionData, timeRange), [timeRange, totalEmissionData]);

   console.log("rirendererojeroieio");

   if (!selectableData || selectableData.length === 0) return <>Data Not found</>;

   return (
      <ChartContainer>
         <ChartCounter data={selectableData} />
         <ResponsiveContainer height={300} width="90%" >
            <LineChart width={600} height={300} data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line
                  type="step"
                  dataKey="average"
                  stroke="#8884d8"
                  dot={(selectableData).length < 60 ? true : false}
               />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis
                  dataKey="end"
               />
               <YAxis />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
         <Select
            value={timeRange}
            onChange={(range) => { setTimeRange(range); }}
            options={timeRangeOptions || null}
            isClearable={false}
            isSearchable={false}
         />
      </ChartContainer>
   );
}