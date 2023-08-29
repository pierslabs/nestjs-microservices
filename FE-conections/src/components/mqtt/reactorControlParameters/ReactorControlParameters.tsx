import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const ReactorControlParameters: FC = () => {
  // Add your logic to find the measurement for reactor control parameters

  return (
    <GridItemWraper>
      <MeasurementComponent
        name='Parámetros de Control del Reactor'
        value={56}
        unit={'%'}
      />
    </GridItemWraper>
  );
};

export default ReactorControlParameters;
