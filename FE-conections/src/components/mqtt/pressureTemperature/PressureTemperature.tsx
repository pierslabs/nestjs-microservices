import { FC } from 'react';
import { Measurement, measurements } from '../../../config/fakeData/fakeData';
import MeasurementComponent from '../measurement/Measurement';

const PressureTemperature: FC = () => {
  const pressureMeasurement: Measurement | undefined = measurements.find(
    (m) => m.nombre === 'Presión'
  ) ?? { nombre: '', valor: 0, unidad: '' };
  const temperatureMeasurement: Measurement | undefined = measurements.find(
    (m) => m.nombre === 'Temperatura'
  ) ?? { nombre: '', valor: 0, unidad: '' };

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre={pressureMeasurement.nombre}
        valor={pressureMeasurement.valor}
        unidad={pressureMeasurement.unidad}
      />
      <MeasurementComponent
        nombre={temperatureMeasurement.nombre}
        valor={temperatureMeasurement.valor}
        unidad={temperatureMeasurement.unidad}
      />
    </div>
  );
};

export default PressureTemperature;
