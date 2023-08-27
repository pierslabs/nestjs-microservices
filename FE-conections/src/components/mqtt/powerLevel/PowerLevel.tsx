import { FC } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useMqtt from '../../../hooks/mqtt/useMqtt';

const PowerLevel: FC = () => {
  const { data } = useMqtt({ subscription: 'power-level-out', array: true });

  const actualData =
    data.length === 0
      ? [
          {
            id: 'd4889761fd7d6307ba577',
            unit: 'MW',
            value: 4000,
          },
        ]
      : data.map((item) => {
          return {
            id: item.id,
            unit: item.data.unit,
            value: item.data.value,
          };
        });

  return (
    <div>
      <h1>Power Level Generate</h1>

      <ResponsiveContainer width={'80%'} height={'90%'}>
        <LineChart
          width={700}
          height={400}
          data={actualData}
          margin={{ top: 70, right: 20, left: 10, bottom: 5 }}
          style={{ position: !data ? 'absolute' : 'relative' }}
        >
          <Line
            isAnimationActive={false}
            type='natural'
            dataKey='value'
            stroke='#8884d8'
          />
          <XAxis dataKey='' />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PowerLevel;
