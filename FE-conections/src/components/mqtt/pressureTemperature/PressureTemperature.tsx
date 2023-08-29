import { FC } from 'react';
import { Measurement, measurements } from '../../../config/fakeData/fakeData';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const PressureTemperature: FC = () => {
  const pressureMeasurement: Measurement | undefined = measurements.find(
    (m) => m.name === 'Presión'
  ) ?? { name: '', value: 0, unit: '' };
  const temperatureMeasurement: Measurement | undefined = measurements.find(
    (m) => m.name === 'Temperatura'
  ) ?? { name: '', value: 0, unit: '' };

  return (
    <GridItemWraper>
      <MeasurementComponent
        name={pressureMeasurement.name}
        value={pressureMeasurement.value}
        unit={pressureMeasurement.unit}
      />
      <MeasurementComponent
        name={temperatureMeasurement.name}
        value={temperatureMeasurement.value}
        unit={temperatureMeasurement.unit}
      />
    </GridItemWraper>
  );
};

export default PressureTemperature;
