import { FC } from 'react';
import { measurements } from '../../../config/fakeData/fakeData';
import MeasurementComponent from '../measurement/Measurement';

const Radiation: FC = () => {
  const radiationMeasurement = measurements.find(
    (m) => m.nombre === 'Radiación'
  ) ?? { nombre: '', valor: 0, unidad: '' };

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre={radiationMeasurement.nombre}
        valor={radiationMeasurement.valor}
        unidad={radiationMeasurement.unidad}
      />
    </div>
  );
};

export default Radiation;
