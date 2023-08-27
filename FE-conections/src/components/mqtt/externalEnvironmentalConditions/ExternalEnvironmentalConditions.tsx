import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const ExternalEnvironmentalConditions: FC = () => {
  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Condiciones Ambientales Externas'
        valor={67}
        unidad={'%'}
      />
    </div>
  );
};

export default ExternalEnvironmentalConditions;
