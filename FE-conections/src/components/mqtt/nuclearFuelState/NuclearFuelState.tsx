import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const NuclearFuelState: FC = () => {
  // Add your logic to find the measurement for nuclear fuel state

  return (
    <GridItemWraper>
      <MeasurementComponent
        name='Estado del Combustible Nuclear'
        value={76}
        unit={'%'}
      />
    </GridItemWraper>
  );
};

export default NuclearFuelState;
