import { FC, useEffect, useState } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import useMqtt, { Message } from '../../../hooks/mqtt/useMqtt';

const AirFlowVentilation: FC = () => {
  const topic = 'airFlowVentilation-out';
  const { data } = useMqtt({ subscription: topic });

  const [airFlowState, setAirFlowState] = useState<Message>();

  const { value, unit } = airFlowState?.data ?? { value: 0, unit: 'm³/s' };

  const valuePercentage = (value / 5) * 100;

  console.log({ airFlowState });

  useEffect(() => {
    if (data?.data.unit === 'm³/s') setAirFlowState(data);
  }, [data]);

  return (
    <div className='border w-full h-full p-5 overflow-hidden'>
      <MeasurementComponent
        name='Flujo de Aire y Ventilación'
        value={value.toFixed(2) as unknown as number}
        unit={unit}
      />

      <div className='bg-yellow-300 h-4'>
        <div
          className='h-[100%] bg-green-500 transition-all duration-300'
          style={{ width: `${valuePercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AirFlowVentilation;
