import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const ExternalEnvironmentalConditions: FC = () => {
  return (
    <div className='measurement-container'>
      <MeasurementComponent name='Condiciones Ambientales Externas' />
    </div>
  );
};

export default ExternalEnvironmentalConditions;
