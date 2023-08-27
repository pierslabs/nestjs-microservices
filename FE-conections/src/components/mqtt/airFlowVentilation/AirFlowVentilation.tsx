import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import useMqtt from '../../../hooks/mqtt/useMqtt';

const AirFlowVentilation: FC = () => {
  const topic = 'airFlowVentilation-out';
  const { data } = useMqtt({ subscription: topic, array: false });

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        name='Flujo de Aire y Ventilación'
        value={data.value}
        unit={data.unit}
      />
    </div>
  );
};

export default AirFlowVentilation;
