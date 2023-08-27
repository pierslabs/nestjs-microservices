import { FC, useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useMqtt from '../../../hooks/mqtt/useMqtt';

interface Messages {
  id: string;
  value: number;
  unit: string;
}

const PowerLevel: FC = () => {
  const { data } = useMqtt({ subscription: 'power-level-out' });
  const [messages, setMessages] = useState<Messages[]>([
    {
      id: '0',
      value: 5000,
      unit: 'MW',
    },
  ]);

  useEffect(() => {
    console.log('entra');
    if (data && data.data.unit === 'MW') {
      if (messages.length > 5) {
        messages.shift();
      }
      setMessages((prev) => [
        ...prev,
        { id: data.id, value: data.data.value, unit: data.data.unit },
      ]);
    }
  }, [data && data.data.unit === 'MW']);

  return (
    <div className='border w-full h-full p-5'>
      <h1>Power Level Generate</h1>

      <ResponsiveContainer width={'80%'} height={'90%'}>
        <LineChart
          width={700}
          height={400}
          data={messages}
          margin={{ top: 70, right: 20, left: 10, bottom: 5 }}
          style={{ position: !data ? 'absolute' : 'relative' }}
        >
          <Line
            isAnimationActive={true}
            type='natural'
            dataKey='value'
            stroke='#8884d8'
            dot={false}
          />
          <XAxis dataKey='' />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PowerLevel;
