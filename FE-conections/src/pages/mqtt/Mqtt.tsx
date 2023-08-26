/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import useMqtt from '../../hooks/mqtt/useMqtt';
import { FC } from 'react';

export const MQTT: FC = () => {
  const { data } = useMqtt('power-level-out');

  return (
    <div
      className=' items-center h-screen container mx-auto mt-10'
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <h1 className='text-2xl'>Power Level Generate</h1>
      <hr />
      <LineChart
        width={700}
        height={400}
        data={data || [{ unit: 'MW', value: 2359.003318405056 }]}
        className='mt-5'
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
  );
};
