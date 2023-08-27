import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const FireProtectionSystems: FC = () => {
  // Add your logic to find the measurement for fire protection systems

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Sistemas de Protección contra Incendios'
        valor={89}
        unidad={'%'}
      />
    </div>
  );
};

export default FireProtectionSystems;
