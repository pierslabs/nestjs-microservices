import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';

const HazardousChemicals: FC = () => {
  // Add your logic to find the measurement for hazardous chemicals

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Presencia de Gases o Químicos Peligrosos'
        valor={78}
        unidad={'%'}
      />
    </div>
  );
};

export default HazardousChemicals;
