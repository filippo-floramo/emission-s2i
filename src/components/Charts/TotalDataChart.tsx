import { useMemo } from 'react';
import { getRangeData } from "../../lib/utils/functions";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { timeRangeOptions } from "../../lib/utils/miscellaneous";
import ChartContainer from "./ChartContainer/ChartContainer";
import ChartDetailsContainer from './ChartDetailsContainer/ChartDetailsContainer';
import ChartCounter from "./ChartCounter/ChartCounter";
import useStateAtoms from "../../atoms/atoms";
import Select from "react-select";
import useEmissionAtoms from '../../atoms/emissionAtoms';
import useHasMounted from '../../hooks/useHasMounted';


export default function TotalDataChart(): JSX.Element {
   const hasMounted = useHasMounted();
   const { timeRange, setTimeRange } = useStateAtoms();
   const { totalEmissionData } = useEmissionAtoms();
   const selectableData = useMemo(() => getRangeData(totalEmissionData, timeRange), [timeRange, totalEmissionData]);

   if (!hasMounted) return <div>Nothign to be found</div>;

   console.log("rirendererojeroieio");

   if (!selectableData || selectableData.length === 0) return <>Data Not found</>;

   return (
      <ChartContainer>
         <ChartDetailsContainer typeResult='Complete Results'>
            <ChartCounter data={selectableData} />
            <Select
               value={timeRange}
               onChange={(range) => { setTimeRange(range); }}
               options={timeRangeOptions || null}
               isClearable={false}
               isSearchable={false}
               styles={{
                  container: (base) => ({
                     ...base, 
                     maxWidth: "200px"
                  })
               }}
            />
         </ChartDetailsContainer>
         <ResponsiveContainer height={350} width="100%" >
            <LineChart data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
      </ChartContainer>
   );
}