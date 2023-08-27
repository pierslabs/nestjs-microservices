import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const RadioactiveContamination: FC = () => {
  return (
    <div className='p-5 border w-full h-full '>
      <MeasurementComponent
        name='Niveles de Contaminación Radiactiva'
        value={3}
        unit={'μSv/h'}
      />
    </div>
  );
};

export default RadioactiveContamination;
