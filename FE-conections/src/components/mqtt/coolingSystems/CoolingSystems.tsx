import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const CoolingSystems: FC = () => {
  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Sistemas de Enfriamiento'
        valor={78}
        unidad={'%'}
      />
    </div>
  );
};

export default CoolingSystems;
