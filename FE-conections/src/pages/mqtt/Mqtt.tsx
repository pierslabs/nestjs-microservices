/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import useMqtt from '../../hooks/mqtt/useMqtt';
import { FC } from 'react';

export const MQTT: FC = () => {
  const { data } = useMqtt('power-level-out');

  const actualData =
    data.length === 0
      ? [
          {
            id: 'd4889761fd7d6307ba577',
            unit: 'MW',
            value: 4000,
          },
        ]
      : data;

  return (
    <div
      className=' items-center h-screen container mx-auto mt-10'
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <h1 className='text-2xl'>Power Level Generate</h1>
      <hr />
      <div className='p-3'>
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
      </div>
    </div>
  );
};
