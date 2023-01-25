import { useMemo } from 'react';
import { getRangeData } from "../../lib/utils/functions";
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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

   if (!hasMounted) return <ChartContainer>Ooops, something went wrong</ChartContainer>;

   if (!selectableData || selectableData.length === 0) return <ChartContainer>Data Not found</ChartContainer>;

   return (
      <ChartContainer>
         <ChartDetailsContainer typeResult='Complete Results (in ⋅ 10⁻² mol / m²)'>
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
                     maxWidth: "200px",
                  }),
                  control: (base) => ({
                     ...base,
                     height: "30px",
                     cursor: "pointer"
                  }),
                  option: (base) => ({
                     ...base,
                     cursor: "pointer"
                  }),
               }}
            />
         </ChartDetailsContainer>
         <ResponsiveContainer height={350} width="100%" >
            {
               selectableData.length > 500 ?
                  <AreaChart data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                     <Area
                        type="step"
                        dataKey="average"
                        stroke='#004aad'
                        fill='lightblue'
                        dot={(selectableData).length < 60 ? true : false}
                     />
                     <XAxis
                        dataKey="end"
                        tick={{ fontSize: 13 }}
                     />
                     <YAxis
                        tick={{ fontSize: 13 }}
                     />
                     <Tooltip />
                  </AreaChart>
                  :
                  <BarChart data={selectableData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                     <Bar
                        type="step"
                        dataKey="average"
                        fill='#1f57a1'
                        maxBarSize={70}
                     />
                     <XAxis
                        dataKey="end"
                        tick={{ fontSize: 13 }}
                     />
                     <YAxis
                        tick={{ fontSize: 13 }}
                     />
                     <Tooltip
                        cursor={{ fill: "#c7f9ee5b" }}
                     />
                  </BarChart>
            }
         </ResponsiveContainer>
      </ChartContainer>
   );
}