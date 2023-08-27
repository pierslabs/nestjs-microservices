import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const RadioactiveContamination: FC = () => {
  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Niveles de Contaminación Radiactiva'
        valor={3}
        unidad={'μSv/h'}
      />
    </div>
  );
};

export default RadioactiveContamination;
