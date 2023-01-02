import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useEmissionAtoms from '../../atoms/emissionAtoms';
import ChartContainer from './ChartContainer/ChartContainer';

export default function MainChart(): JSX.Element {
  const { mainEmissionData } = useEmissionAtoms();

  if (!mainEmissionData || mainEmissionData.length === 0) return <>Data Not found</>;

  return (
    <ChartContainer>
      <ResponsiveContainer height={300} width="90%">
        <LineChart
          width={600}
          height={300}
          data={mainEmissionData || []}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line
            type="step"
            dataKey="average"
            stroke="#000000"
            dot={(mainEmissionData || []).length < 60 ? true : false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="end" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
