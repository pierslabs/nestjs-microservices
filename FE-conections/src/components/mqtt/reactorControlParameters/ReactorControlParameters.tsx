import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const ReactorControlParameters: FC = () => {
  // Add your logic to find the measurement for reactor control parameters

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Parámetros de Control del Reactor'
        valor={56}
        unidad={'%'}
      />
    </div>
  );
};

export default ReactorControlParameters;
