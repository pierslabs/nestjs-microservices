import { FC } from 'react';
import { measurements } from '../../../config/fakeData/fakeData';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const Radiation: FC = () => {
  const radiationMeasurement = measurements.find(
    (m) => m.name === 'Radiación'
  ) ?? { name: '', value: 0, unit: '' };

  return (
    <GridItemWraper>
      <MeasurementComponent
        name={radiationMeasurement.name}
        value={radiationMeasurement.value}
        unit={radiationMeasurement.unit}
      />
    </GridItemWraper>
  );
};

export default Radiation;
