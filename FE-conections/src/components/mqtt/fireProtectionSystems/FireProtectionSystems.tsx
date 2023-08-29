import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const FireProtectionSystems: FC = () => {
  // Add your logic to find the measurement for fire protection systems

  return (
    <GridItemWraper>
      <MeasurementComponent
        name='Sistemas de Protección contra Incendios'
        value={89}
        unit={'%'}
      />
    </GridItemWraper>
  );
};

export default FireProtectionSystems;
