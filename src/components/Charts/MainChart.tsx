import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useEmissionAtoms from '../../atoms/emissionAtoms';
import { useHasMounted } from '../../hooks/useHasMounted';
import ChartContainer from './ChartContainer/ChartContainer';
import ChartCounter from './ChartCounter/ChartCounter';
import ChartDetailsContainer from './ChartDetailsContainer/ChartDetailsContainer';

export default function MainChart(): JSX.Element {
  const hasMounted = useHasMounted();
  const { mainEmissionData } = useEmissionAtoms();

  if (!hasMounted) return <ChartContainer>Loading...</ChartContainer>;

  if (!mainEmissionData || mainEmissionData.length === 0) return <ChartContainer>Data Not found</ChartContainer>;

  return (
    <ChartContainer>
      <ChartDetailsContainer typeResult="Your Search Results (in ⋅ 10⁻² mol / m²)">
        <ChartCounter data={mainEmissionData} />
      </ChartDetailsContainer>
      <ResponsiveContainer height={350} width="100%">
        <BarChart
          width={600}
          height={300}
          data={mainEmissionData || []}
          margin={{ top: 5, right: 35, bottom: 5, left: 0 }}>
          <Bar type="step" dataKey="average" fill="#de542c" maxBarSize={70} z={3} />
          <XAxis dataKey="end" tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 13 }} />
          <Tooltip cursor={{ fill: '#f7f4bf87' }} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
