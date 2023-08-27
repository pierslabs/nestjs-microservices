import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const NuclearFuelState: FC = () => {
  // Add your logic to find the measurement for nuclear fuel state

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Estado del Combustible Nuclear'
        valor={76}
        unidad={'%'}
      />
    </div>
  );
};

export default NuclearFuelState;
