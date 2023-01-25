import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useEmissionAtoms from '../../atoms/emissionAtoms';
import useHasMounted from '../../hooks/useHasMounted';
import ChartContainer from './ChartContainer/ChartContainer';
import ChartCounter from './ChartCounter/ChartCounter';
import ChartDetailsContainer from './ChartDetailsContainer/ChartDetailsContainer';

export default function MainChart(): JSX.Element {

  const hasMounted = useHasMounted();
  const { mainEmissionData } = useEmissionAtoms();

  if (!hasMounted) return <div>Nothign to be found</div>;


  if (!mainEmissionData || mainEmissionData.length === 0) return <>Data Not found</>;

  return (
    <ChartContainer >
      <ChartDetailsContainer typeResult='Your Search Results'>
        <ChartCounter data={mainEmissionData} />
      </ChartDetailsContainer>
      <ResponsiveContainer height={350} width="100%">
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
